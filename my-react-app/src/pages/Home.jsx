import React from "react";
import Card from "../components/Card";
import List from "../components/List";
import ProfilePicture from "../components/ProfilePicture";
import Student from "../components/Student";
import ToDoList from "../components/ToDoList";

const Home = () => {
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
    <div className="pb-10">
      <h1 className="container">Home</h1>
      <div className="top">
        <Card />
        <div className="middle">
          {fruits.length > 0 && <List list={fruits} category="Fruits" />}
          {vegs.length > 0 && <List list={vegs} category="Vegetables" />}
        </div>
        <ProfilePicture />
      </div>
      <ToDoList />
      <Student name="Patrick" age={30} isStudent={false} />
      <Student name="Bob" age={28} isStudent={true} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={28} isStudent={false} />
    </div>
  );
};

export default Home;
