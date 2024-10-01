
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer'



function App() {

  return (
    <>
    <BrowserRouter>
        <div className='navBar'>
            <NavBar/>   
        </div>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>} />
          <Route exact path='/Categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route exact path='/Item/:Id' element={<ItemDetailContainer/>} />
          {/* <Route exact path='/Carrito' element={<Carrito/>} /> */}
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
