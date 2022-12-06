import React, { useState, useEffect, Children } from "react";
import "./Horse.css";

const Horse = (props) => {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    getHorse();
  }, []);

  const getHorse = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((data) => {
        console.log(data);
        let parseData = JSON.parse(data);
        console.log(parseData);
        setHorses(parseData);
      });
  };




  const horseList = horses.map((myHorse, index) => (
    <ul key={index}>
      <li id="myhorseListDataWrapper">
        <hr id="hr" />
        <span id="horseListDataId"> {myHorse.horseid}</span>
        <span id="horseListDataHorseName"> {myHorse.horseName}</span>
        <span id="horseListDataSireName"> {myHorse.sireName}</span>
        <span id="horseListDataWinnings">{myHorse.horseWinnings}</span>
        <span id="horseListDataRank"> {myHorse.horseRank}</span>
        <span id="horseListDataStarts"> {myHorse.sts}</span>
        <span id="horseListDataWinPercent"> {myHorse.winPercent + "%"}</span>
        <span id="horseListDataFirst"> {myHorse.horseFirst}</span>
        <span id="horseListDataSecond"> {myHorse.horseSecond}</span>
        <span id="horseListDataThird"> {myHorse.horseThird}</span>
      </li>
    </ul>
  ));

  return (
    <div>
      <div id="horseDataHeader">
        HORSE DATA <br /> #{horses.length} Listed
        <br />
      </div>
      <div className="horseDataHeaderTitles">
        <span id="horseDataListHeaderID">ID </span>
        <span id="horseDataListHeaderHorseName">Horse Name</span>
        <span id="horseDataListHeaderSireName">Sire Name</span>
        <span id="horseDataListHeaderWinnings">Winnings</span>
        <span id="horseDataListHeaderRank">Rank</span>
        <span id="horseDataListHeaderStarts">Starts</span>
        <span id="horseDataListHeaderWinPercent">Win %</span>
        <span id="horseDataListHeaderFirst">1st</span>
        <span id="horseDataListHeaderSecond">2nd</span>
        <span id="horseDataListHeaderThird">3rd</span>
      </div>
      <div id="horseDataList">
        <br />
        <br />
        <br />
        <br />
        <br />
        {horseList}
      </div>
    </div>
  );
};

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// const deleteHorse = () => {
//   let id = prompt("Enter horse id");
//   fetch(`http://localhost:3001/horses/${id}`, {
//     method: "DELETE",
//   })
//     .then((response) => {
//       return response.text();
//     })
//     .then((data) => {
//       alert(data);
//       // getHorse();
//     });

//   // return (
//   //   <div>
//   //     {horses ? horses : 'There is no horse data available'}
//   //     <br />
//   //     <button onClick={createHorse}>Add horse</button>
//   //     <br />
//   //     <button onClick={deleteHorse}>Delete horse</button>
//   //   </div>
//   // );
// };

export default Horse;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [horses, setHorses] = useState(false);
//   useEffect(() => {
//     getHorse();
//   }, []);

//   function getHorse() {
//     fetch("http://localhost:3001")
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         setHorses(data);
//       });
//   }
//   function createHorse() {
//     let horseRank = prompt("Enter horseRank");
//     let horseName = prompt("Enter horseName");
//     // console.log(horseName);
//     // console.log(horseRank);

//     fetch("http://localhost:3001/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ horseRank, horseName }),
//     })
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         alert(data);
//         getHorse();
//       });
//   }
//   function deleteHorse() {
//     let horseid = prompt("Enter horse id");
//     fetch(`http://localhost:3001/horses/${horseid}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         alert(data);
//         getHorse();
//       });
//   }
//   return (
//     <div>
//       {horses ? horses : "There is no horse data available"}
//       <br />
//       <button onClick={createHorse}>Add horse</button>
//       <br />
//       <button onClick={deleteHorse}>Delete horse</button>
//     </div>
//   );
// }
// export default App;
