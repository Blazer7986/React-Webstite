import React from "react";
import DigitalClock from "../components/DigitalClock";
import ButtonB from "../components/ButtonB";
import Window from "../components/Window";

const About = () => {
  return (
    <div className="pb-10">
      <h1 className="container">About</h1>
      <DigitalClock />
      <button className="m-2 py-2 px-4 bg-fuchsia-600 text-white rounded">
        Click Me
      </button>
      <ButtonB />
      <Window />
    </div>
  );
};

export default About;
