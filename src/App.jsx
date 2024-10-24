import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './Context/cartContext'
import Checkout from './components/Checkout'




function App() {

  return (
    <>

    <CartProvider>
    <BrowserRouter>
        <div className='navBar'>
            <NavBar/>   
        </div>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>} />
          <Route exact path='/Categoria/:categoria' element={<ItemListContainer/>} />
          <Route exact path='/Item/:Id' element={<ItemDetailContainer/>} />
          <Route exact path='/Carrito' element={<Checkout/>} />
        </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
