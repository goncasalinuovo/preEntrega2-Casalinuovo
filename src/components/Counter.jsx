import './Counter.css'

const Counter = ( {num, handleRestar, handleSumar, handleAgregar} ) => {


    return(
        <>
        <div className='counterStyle'>
        <button onClick={handleRestar}>-</button>
        <h2>{num}</h2>
        <button onClick={handleSumar}>+</button>
        <div>
        <button onClick={handleAgregar}>Agregar al Carrito</button>
        </div>
        </div>
        </>
    )
}

export default Counter;