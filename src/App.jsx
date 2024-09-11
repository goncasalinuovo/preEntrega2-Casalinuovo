
import './App.css'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import TituloComponente from './components/TituloComponente'

function App() {

  return (
    <>
    <div className='navBar'>
      <TituloComponente titulo='Vivero'/>
      <NavBar texto='Home'/>
      <NavBar texto='Productos'/>
      <NavBar texto='Contacto'/>
      <CartWidget/>
    </div>
    <ItemListContainer greeting='Bienvenido a nuestro Vivero online'/>
    </>
  )
}

export default App
