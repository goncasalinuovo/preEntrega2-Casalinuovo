import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../firebase/config"
import { ItemDetail } from "./itemDetail"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const {Id} = useParams()

    useEffect(() => {
        const docRef = doc(db, 'productos', Id);
        getDoc(docRef)
            .then((resp) => {
                setProducto(
                    {...resp.data(), id: resp.id}
                )

            })
    }, [Id]);

    return(
        <>
        <div>
            {producto && <ItemDetail producto={producto} />}
        </div>
        </>
    )
}

export default ItemDetailContainer;