import React, { useState } from "react";

// onChange = event handler primarily with form elements ex. <imput>,
//            <textarea>, <select>, <radio>
//            Tiggers a function every time the value of the input changes.

// update function = A function passed as an argument to setState() usually
//                   ex. setYear(arrow function)
//                   Allow for safe updates based on pervious state. Used
//                   with multiple state updates and asynchronous functions.
//                   Good practice to use update functions.

function myComponent() {
  // useState only
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmploy, setIsEmpoly] = useState(false);

  // With onChange
  const [name2, setName2] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  const updateName = () => {
    setName("Rosa");
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const toggleEmployStatus = () => {
    setIsEmpoly(!isEmploy);
  };

  function handleNameChange(event) {
    setName2(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div className="create-person">
      <p>
        <b>*Create Person*</b>
      </p>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Set Age</button>
      <p>IsEmployed: {isEmploy ? "Yes" : "No"}</p>
      <button onClick={toggleEmployStatus}>Set Age</button>
      <p>---------------------------------------------</p>

      <p>
        <b>*Shipping Info*</b>
      </p>
      <p>Name: {name2}</p>
      <input type="text" value={name2} onChange={handleNameChange} />
      <p>Quantity: {quantity}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Shipping Details</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      />
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Gift Card">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        <input
          type="radio"
          value="Pick up"
          checked={shipping === "Pick up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>
      <label>
        <br />
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default myComponent;
