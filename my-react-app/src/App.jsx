import Card from "./Card.jsx";
import Button from "./Button.jsx";

// How to style React components with CSS
// -----------------------------------------
// Not including frameworks or preprocessors
// 1. External - CSS files like index.CSS
// Pros: Great for small scale projects
// 2. modules - Create a folder and module file
// Pros: Used for individual components with unique styles
// 3. inline - Using style variable
// Pros: Good for small components with minimal styling.

// props = read-only properties that are shared between components.
//         A parent component can send data to a child component. 
//         <Component key=value />


function App() {

  return (
    <>
      <Card/>
      <Card/>
      <Button/>
    </>
  );
}

export default App
