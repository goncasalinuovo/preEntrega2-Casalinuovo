import './CartWidget.css'
import {Link} from 'react-router-dom'

export default function CartWidget () {
    return(
        <div className='cart'>
            <h2><Link to={'/Carrito'}>🛒</Link></h2>
            <p>{1}</p>
        </div>
    )
}