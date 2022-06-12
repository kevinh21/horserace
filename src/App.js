import React from "react";
// import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
// import Horse from "./Components/Horse/Horse";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
