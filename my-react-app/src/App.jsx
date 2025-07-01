import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

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
      <Student name="Patrick" age={30} isStudent={false} />
      <Student name="Bob" age={28} isStudent={true} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={28} isStudent={false} />
    </>
  );
}

export default App;
