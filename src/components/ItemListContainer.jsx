import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'
import { Link } from 'react-router-dom'


export default function ItemListContainer () {

    const [productos, setProductos] = useState([])

    const categoria = useParams().categoria;

    useEffect(() => {

        const refProductos = collection(db, 'productos');

        const quer = categoria ? query(refProductos, where('categoria', '==', categoria)) : refProductos;


        getDocs(quer)
            .then((resp) => {
                setProductos(
                    resp.docs.map(doc => {
                        return{...doc.data(), id: doc.id}
                    })
                )

            })

    }, [categoria]);

    return (
        <div className='container'>
            {productos.map(prod => (
                <div key={prod.id} className='card'>
                    <img src={prod.imagen} alt={prod.name} />
                    <h2>{prod.nombre}</h2>
                    <p>${prod.precio}</p>
                    <button className='itemButton'>
                    <Link to={`/Item/${prod.id}`}>Detalle</Link>
                    </button>
                </div>
            ))}
        </div>
    );
}