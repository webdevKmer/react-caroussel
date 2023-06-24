import {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)


    const addOne = () => {
        setCounter(counter + 1)
    }
    const minusOne = () => {
        setCounter(counter - 1)        
    }
  return (
    <div>
        <p>{counter}</p>
        <button onClick={addOne}>Add 1</button>
        <button onClick={minusOne}>Minus 1</button>
    </div>
  )
}

export default Counter