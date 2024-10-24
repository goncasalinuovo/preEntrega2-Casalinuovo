import { useContext } from 'react'
import './CartWidget.css'
import {Link} from 'react-router-dom'
import { cartContext } from '../Context/cartContext'

export default function CartWidget () {

    const [carrito] = useContext(cartContext)

    

    return(
        <div className='cart'>
            <h2><Link to={'/Carrito'}>🛒</Link></h2>
            <p>{carrito.length}</p>
        </div>
    )
}