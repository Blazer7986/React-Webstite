import Card from "./components/Card.jsx";
import Student from "./components/Student.jsx";
import UserGreeting from "./components/UserGreeting.jsx";
import List from "./components/List.jsx";
import ProfilePicture from "./components/ProfilePicture.jsx";
import Footer from "./components/Footer.jsx";
import MyComponent from "./components/myComponent.jsx";
import Counter from "./components/Counter.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import Food from "./components/Food.jsx";
import Car from "./components/Car.jsx";

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

// React hook = Special feature that allows functional components to use
//              React features without writing class components (useState,
//              useEffect, useContext, useReducer, useCallback, and more.

// useState() = React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Viritual
//              DOM.        EX) [name, setName]

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "kiwi", calories: 45 },
    { id: 3, name: "orange", calories: 105 },
    { id: 4, name: "banana", calories: 157 },
    { id: 5, name: "blueberry", calories: 37 },
  ];
  const vegs = [
    { id: 1, name: "potato", calories: 110 },
    { id: 2, name: "tomato", calories: 55 },
    { id: 3, name: "carrot", calories: 25 },
    { id: 4, name: "corn", calories: 63 },
    { id: 5, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Rosa Balanca" />
      <Card />
      {fruits.length > 0 && <List list={fruits} category="Fruits" />}
      {vegs.length > 0 && <List list={vegs} category="Vegetables" />}
      <ProfilePicture />
      <Student name="Patrick" age={30} isStudent={false} />
      <Student name="Bob" age={28} isStudent={true} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={28} isStudent={false} />
      <MyComponent />
      <Counter />
      <ColorPicker />
      <Food />
      <Car />
      <Footer />
    </>
  );
}

export default App;
