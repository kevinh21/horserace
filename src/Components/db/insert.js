// const sqlite3 = require("sqlite3").verbose();


// const Insert = () => {
//   return new Promise(function (resolve, reject) {
//     let db = new sqlite3.Database("../db/horserace.sqlite3");
//     // insert one row into the products table
//     db.run(
//       `INSERT INTO products(description) VALUES(?)`,
//       ["Kevin Was Here"],
//       function (err) {
//         if (err) {
//           return console.log(err.message);
//         }
//         // get the last insert id
//         console.log(`A row has been inserted with rowid ${this.lastID}`);
//       }
//     );
//     db.close();
//   });
// };
// Insert();
// // close the database connection
// export default Insert;

// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import Helmet from 'react-helmet';

// export default function Products() {
//     const [rows, setRows] = useState([]);
//     const [name, setName] = useState('');
//     const [src, setSrc] = useState('');

//     useEffect(() => {
//         axios.get('/products/get')
//             .then(res => {
//                 setRows(res.data);
//             }).catch(err => {
//             console.log(err);
//         });
//     });

//     //Insert into database api request
//     const insertRow = () => {
//         axios.post('/products/insert', {
//             row: {name: name, image: src}
//         });

//         console.log(name, src);
//     };

//     //Delete from database api request
//     const deleteRow = () => {
//         axios.delete(`/products/delete/${name, src}`);
//     };

//     return (
//         <>
//             <Helmet>
//                 <title>Title | products</title>
//             </Helmet>
            
//             <div className="pt-36 sm:pt-44 pb-20 md:pb-48 max-w-[1200px] mx-5 lg:mx-auto">
//                 <input className="border-2 border-black p-1" type="text" onChange={setName} />
//                 <input className="border-2 border-black p-1" type="text" onChange={setSrc} />;

//                 <button className="border-2 border-l-0 border-black p-1" onClick={insertRow}>Submit</button>

//                 {rows.map((row, index) => {
//                     return (
//                         <div key={index}>
//                             <p>{row.name}</p>
//                             <img src={row.image} alt={row.name} />
//                             <button onClick={() => {deleteRow(row)}}>Delete</button>
//                         </div>
//                     )
//                 })}
//             </div>
//         </>
//     );
// };



import React, {useState, useEffect} from 'react';
function App() {
  const [merchants, setMerchants] = useState(false);
  useEffect(() => {
    getMerchant();
  }, []);


  function getMerchant() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setMerchants(data);
      });
  }


  function createMerchant() {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');
    fetch('http://localhost:3001/merchants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMerchant();
      });
  }


  function deleteMerchant() {
    let id = prompt('Enter merchant id');
    fetch(`http://localhost:3001/merchants/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMerchant();
      });
  }

  
  return (
    <div>
      {merchants ? merchants : 'There is no merchant data available'}
      <br />
      <button onClick={createMerchant}>Add merchant</button>
      <br />
      <button onClick={deleteMerchant}>Delete merchant</button>
    </div>
  );
}
export default App;