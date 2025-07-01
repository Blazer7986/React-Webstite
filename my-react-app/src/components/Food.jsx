import React, { useState } from "react";

function Food() {
  const food1 = "Strawberry";
  const food2 = "Kiwi";

  // Update arrays in state
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    // _ is a varaible being ignore.
    setFoods(foods.filter((_, i) => i != index));
  }

  return (
    <div className="create-food-list">
      <h3>List of Foods: </h3>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" /> <br />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default Food;
