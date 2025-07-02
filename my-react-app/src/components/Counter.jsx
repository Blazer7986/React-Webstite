import React, { useState, useEffect } from "react";

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

  // useEffect method or side-code method
  const [count2, setCount2] = useState(0);
  const [color, setColor] = useState("green");

  // This useEffect statement will always re-render no matter the condition
  // useEffect(() => {
  //   document.title = `Count: ${count2}`;
  // });

  // This useEffect will only re-render if the var count2 or color changes.
  useEffect(() => {
    document.title = `Count: ${count2} ${color}`;

    return () => {
      // SOME CLEAN UP CODE
    };
  }, [count2, color]);

  // Use this specific useEffect for one-time use.
  //  useEffect(() => {
  //   document.title = `My Counter`;
  // }, []);

  function addCount() {
    setCount2((c) => c + 1);
  }

  function subtractCount() {
    setCount2((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

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
      <p>-----------------------------------------------------</p>
      <p style={{ color: color }}>Count: {count2}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button> <br />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Counter;
