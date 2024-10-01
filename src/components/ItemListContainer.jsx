import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pintarProductos, pintarCategoria} from '../asyncMock'
import { Link } from 'react-router-dom'


export default function ItemListContainer () {

    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (categoriaId) {
                const filterProd = await pintarCategoria(categoriaId);
                setProductos(filterProd);
            } else {
                const data = await pintarProductos;
                setProductos(data);
            }
        };

        fetchData();
    }, [categoriaId]);

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