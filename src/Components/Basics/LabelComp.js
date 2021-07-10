import React from "react";
import './Components/Basics/Labeldesign.css';

const LabelComp = () => {
  const name = "Latha";
  const date = new Date(2021, 6, 29);
  const tdy = date.toISOString();
  return (
    <div>
      <h2 className="wavetext">
        <span>In Label Functional Component</span>
      </h2>
      <div>
        <h1 className="name">My Name is: {name}</h1>
        <h1 className="date">Today's Date: {tdy}</h1>
      </div>
    </div>
  );
};

export default LabelComp;
