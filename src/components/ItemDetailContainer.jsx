import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { pintarProducto } from "../asyncMock"
import Counter from "./Counter"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const {Id} = useParams()

    useEffect(() => {
        const prod = pintarProducto(Number(Id));
        setProducto(prod);
    }, [Id]);

    return(
        <>
        <div className="card-container">
        <div className="card-detail">
            <h2>Detalle del Producto</h2>
            <h3>{producto.nombre} - {producto.categoria}</h3>
            <img src={producto.imagen} alt={producto.nombre} className="card-img"/>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
            <Counter />
        </div>

        </div>
        </>
    )
}

export default ItemDetailContainer;