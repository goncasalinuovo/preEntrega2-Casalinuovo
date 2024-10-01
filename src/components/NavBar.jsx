
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'
import './NavBar.css'
import logo from '../assets/logo.png'

export default function NavBar() {
    return (
        <>
        <div className='navBar'>
        <Link to={'/'}><img src={logo} alt='logo' className='imgLogo'/> </Link>
        <h1>Vivero</h1> 
        <div className='navButtons'>
            <button><Link to={'/Categoria/Interior'}>Interior</Link></button>
            <button><Link to={'/Categoria/Exterior'}>Exterior</Link></button>
            <button><Link to={'/Categoria/maceta'}>Macetas</Link></button>
        </div>  
        <CartWidget />
        </div>
        </>
    )
}
