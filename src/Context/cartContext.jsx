import { createContext, useState } from "react";

export const cartContext=createContext(false);

export function CartProvider({children}){

    const [carrito, setCarrito] = useState([]);

    const addItem = (producto) => {
        setCarrito((prev) => {
            const prodExistente = prev.find(item => item.id === producto.id);
            if (prodExistente) {
                return prev.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + producto.cantidad }
                        : item
                );
            } else {
                return [...prev, { ...producto, cantidad: producto.cantidad }];
            }
        });
    }

    return(<>
        <cartContext.Provider value={[carrito, setCarrito, addItem]}>
            {children}
        </cartContext.Provider>
    </>)
}