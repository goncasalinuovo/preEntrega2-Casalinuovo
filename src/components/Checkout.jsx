import './Checkout.css';
import { useContext, useState } from 'react';
import { cartContext } from '../Context/cartContext';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Checkout = () => {
    const [carrito] = useContext(cartContext);
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirmarCompra = async () => {
        try {
            const orden = {
                buyer: { nombre, telefono, email },
                items: carrito,
                date: new Date(),
                total: carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
            };

            const docRef = await addDoc(collection(db, 'ordenes'), orden);
            Swal.fire({
                icon: 'success',
                title: 'Compra Confirmada',
                text: `Tu número de orden es: ${docRef.id}`,
                confirmButtonText: 'Aceptar'
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo confirmar la compra. Inténtalo nuevamente.',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    if (carrito.length === 0) {
        return <h2>Tu carrito está vacío</h2>;
    }

    return (
        <div className="cart-container">
            <h2>Carrito</h2>
            <ul>
                {carrito.map((item) => (
                    <li key={item.id}>
                        <h3>{item.nombre}</h3>
                        <p>Precio: ${item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <img src={item.imagen} alt={item.nombre} className="cart-item-img" />
                    </li>
                ))}
            </ul>
            <div className="total">
                <h3>
                    Total: ${carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}
                </h3>
            </div>

            <div className="form-container">
                <h3>Completa tus datos para finalizar la compra</h3>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button onClick={handleConfirmarCompra}>
                    Finalizar Compra
                </button>
            </div>
        </div>
    );
};

export default Checkout;