import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    // let count = 0;
    const increment = () => {
        // count++;
        setCount(count+ 1);
        console.log(count)};
    const decrement = () => {
        // count--;
        setCount(count-1);
        console.log(count)};
    return (
        <div>
            <h2
                onClick={()=>{alert("Click");}}>Counter: {count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}
export default Counter;