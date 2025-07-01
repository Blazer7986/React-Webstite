import React, { useState } from "react";

// update function = A function passed as an argument to setState() usually
//                   ex. setYear(arrow function)
//                   Allow for safe updates based on pervious state. Used
//                   with multiple state updates and asynchronous functions.
//                   Good practice to use update functions.

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    // Take the PENDING state to calculate the NEXT state.
    setCount((c) => c + 1);
    // setCount((c) => c + 1);
    // setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
    // setCount((c) => c - 1);
    // setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
