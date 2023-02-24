import { useState } from 'react'

const Counter = function () {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return (
        <>
            <h1>This is FunctionCounter</h1>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter
