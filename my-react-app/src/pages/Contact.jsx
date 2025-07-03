import React from "react";
import StopWatch from "../components/StopWatch";
import ComponentA from "../components/ComponentA";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="container">Contact</h1>
      <div className="contact-buttons">
        <button
          onClick={() => {
            navigate("info");
          }}
        >
          Contact Info
        </button>
        <button
          onClick={() => {
            navigate("form");
          }}
        >
          Contact Form
        </button>
      </div>
    </div>
  );
};

export default Contact;
