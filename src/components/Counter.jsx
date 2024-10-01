import './Counter.css'
import {useState} from 'react'

const Counter = () => {

    const [num, setNum] = useState(1)

    const sumar = () => {
            setNum(num + 1)
    }
    const restar = () => {
        if (num >= 2) {
            setNum(num - 1)
        }else{
            setNum(num)
        }
    }

    return(
        <>
        <div className='counterStyle'>
        <button onClick={restar}>-</button>
        <h2>{num}</h2>
        <button onClick={sumar}>+</button>
        </div>
        </>
    )
}

export default Counter;