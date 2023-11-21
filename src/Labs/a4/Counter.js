import React, { useState } from "react";
function Counter() {
    const [count, setCount] = useState(7);
//   let count = 7;
//   console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn btn-success"
        onClick={() => { setCount(count + 1); }}>
        Up
      </button>
      <button className="btn btn-danger"
        onClick={() => { setCount(count - 1); }}>
        Down
      </button>
      <button className="btn btn-primary"
        onClick={() => { setCount(0); }}>
        Reset
      </button>
    </div>
  );
}
export default Counter;


// import React, {useState} from "react";

// function Counter() {
//     let [count, setCount] = useState(0);
//     const Increment = () => {
//         setCount(count+1);
//         console.log(count);
//     }
//     const Decrement = () => {
//         setCount(count-1);
//         console.log(count);
//     }
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={Increment}>Increment</button>
//             <button onClick={Decrement}>Decrement</button>
//             <h3>{count}</h3>
//         </div>
//     )
// }

// export default Counter;