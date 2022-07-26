// Creating API mockups for local testing and development
// allows you to work in a faster development environment.
// One way to implement an API mockup is to copy the JSON data
// to a local file in your project directory and make your fetch
// or GET calls to that file instead of the real database.
// As fetching data from an external source is still an
// asynchronous task, there are a number of errors you can run
// into while loading data from a JSON file. This guide will
// demonstrate how to correctly fetch data from a JSON file in
// your React app and consume it on the frontend.

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {data && data.length > 0 && data.map((item) => <p>{item.about}</p>)}
    </div>
  );
}

export default App;
