import React from "react";
import DigitalClock from "../components/DigitalClock";
import ButtonB from "../components/ButtonB";
import Window from "../components/Window";

const About = () => {
  return (
    <div>
      <h1 className="container">About</h1>
      <DigitalClock />
      <ButtonB />
      <Window />
    </div>
  );
};

export default About;
