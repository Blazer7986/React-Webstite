import { useEffect, useState } from "react";

function Window() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTNER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTNER REMOVE");
    };
  }, []);

  useEffect(() => {
    document.title = `Width: ${width}, Height: ${height}`;
  }, [width, height]);

  // Without useEffect
  // Will create multiple event listeners.
  // window.addEventListener("resize", handleResize);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div className="margin">
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  );
}

export default Window;
