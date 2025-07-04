import React, { useState, useEffect, useRef } from "react";

function ButtonB() {
  // ref is an object with only one key current and one value.
  // ref does not re-render the component
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "pink";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "pink";
    inputRef3.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "pink";
    inputRef2.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";
  }

  return (
    <div className="margin">
      <button
        className="py-2 px-4 bg-fuchsia-600 p-2 rounded mb-2 text-white"
        onClick={handleClick1}
      >
        Click Me 1
      </button>
      <br />
      <input type="text" ref={inputRef1} /> <br />
      <button
        className="py-2 px-4 bg-fuchsia-600 p-2 rounded mb-2 mt-2 text-white"
        onClick={handleClick2}
      >
        Click Me 2
      </button>{" "}
      <br />
      <input type="text" ref={inputRef2} /> <br />
      <button
        className="py-2 px-4 bg-fuchsia-600 p-2 rounded mb-2 mt-2 text-white"
        onClick={handleClick3}
      >
        Click Me 3
      </button>{" "}
      <br />
      <input type="text" ref={inputRef3} /> <br />
    </div>
  );
}

export default ButtonB;
