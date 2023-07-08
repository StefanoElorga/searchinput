import React, { useState } from "react";
import "./App.css";
import search from "./search.png";

const App = () => {
  return (
    <div className={`container `}>
      <div className="container-input">
        <input type="text" className="my-input" id="my-input" />
        <label className="container-icon" for="my-input">
          <img src={search} className="icon" />
        </label>

        <label className="close one"></label>
        <label className="close two"></label>
      </div>
    </div>
  );
};

export default App;
