import React, { useState, useEffect } from "react";
import "./Term.css";

const Term = (props) => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    getTerm();
  }, []);

  const getTerm = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        let parseData = JSON.parse(data);
        console.log(parseData);
        setTerms(parseData);
      });
  };
  function createTerm() {
    let termName = prompt("Enter term title");
    let description = prompt("Enter description");
    let notes = prompt("Enter notes");

    fetch(`http://localhost:3001/terms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ termName, description, notes }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getTerm();
      });
  }
  function deleteTerm() {
    let termid = prompt("Enter termid");
    fetch(`http://localhost:3001/terms/${termid}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getTerm();
      });
  }
  //////////////////////////////////////////////

  const termList = terms.map((myTerm, index) => (
    <ul key={index}>
      <li id="termListWrapper">
        {/* <hr /> */}
        {/* <h id="termListId"> {myTerm.termid}</h> */}
        <h id="termListTerm"> {myTerm.term}</h>
        <h id="termListDescription"> {myTerm.description}</h>
      </li>
    </ul>
  ));

  return (
    <div className="termWrapper">
      <p id="termData"> TERMINOLOGY</p>
      <h id="termDataListHeader">Term Description</h>
      <h id="termDataList"> {termList}</h>
    </div>
  );
};
export default Term;
