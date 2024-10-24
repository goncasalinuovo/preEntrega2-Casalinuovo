import { useContext, useState } from "react"
import Counter from "./Counter"
import { cartContext } from "../Context/cartContext";
import Swal from 'sweetalert2';



export const ItemDetail = ( {producto} ) => {


    const [num, setNum] = useState(1)

    const handleSumar = () => {
        num < producto.stock && setNum(num + 1)
    }
    const handleRestar = () => {
        if (num >= 2) {
            setNum(num - 1)
        }else{
            setNum(num)
        }
    }

    const [,,addItem] = useContext(cartContext);

    const handleAgregar = () => {
        addItem({ ...producto, cantidad: num });
        Swal.fire({
            icon: 'success',
            title: '¡Producto Agregado!',
            text: `${producto.nombre} ha sido añadido al carrito.`,
            confirmButtonText: 'Aceptar'
        });
    }



    return(
        <>
        <div className="card-container">
        <div className="card-detail">
            <h2>Detalle del Producto</h2>
            <h3>{producto.nombre} - {producto.categoria}</h3>
            <img src={producto.imagen} alt={producto.nombre} className="card-img"/>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
            <p>Disponibles: {producto.stock}</p>
            <Counter 
            num={num}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={handleAgregar}/>
        </div>

        </div>
        </>
    )
}