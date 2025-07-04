import React, { useState } from "react";
import DigitalClock from "../components/DigitalClock";
import ButtonB from "../components/ButtonB";
import Window from "../components/Window";
import PostLists from "../components/PostLists";

const About = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="pb-10">
      <h1 className="container">About</h1>
      <DigitalClock />
      <h3 className="ml-3 text-[22px]">My Posts</h3>
      <button
        className="ml-3 text-[18px] bg-gray-700 text-white p-1 rounded"
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
      {toggle && <PostLists />}
      <ButtonB />
      <Window />
    </div>
  );
};

export default About;
