// https://discuss.codecademy.com/t/why-use-db-each-instead-db-all-or-db-get-in-node-sqlite/381382
// db.get, db.each, db.all

const sqlite3 = require("sqlite3").verbose();
// let db = new sqlite3.Database("../db/horserace.sqlite3");

// open the database and read the list of all tables

function getWish() {
  return new Promise(function (resolve, reject) {
    let db = new sqlite3.Database("../Components/db/horserace.sqlite3");
    let sql = `SELECT * FROM wish`;
    // INNER JOIN products on horses.horseid = products.productid
    // INNER JOIN jockeys on horses.horseid = jockeys.jockeyid
    // INNER JOIN pastraces on horses.horseid = pastraces.pastraceid
    // INNER JOIN tracks on horses.horseid = tracks.trackid
    // INNER JOIN trainers on horses.horseid = trainers.trainerid
    //  INNER JOIN races on horses.horseid = races.raceid
    // LIMIT 1000`;

    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
      rows.forEach((rows) => {
        return rows;
      });
    });

    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Closed the database connection.");
    });
  });
}

// create/insert/[post] a new record in the database
// const createHorse = () => {
//   return new Promise(function (resolve, reject) {
//     let db = new sqlite3.Database("../db/horserace.sqlite3");

//     // let sqlInsert =  `INSERT INTO products(name, item, description, retail, price) VALUES(?,?,?,?,?)`

//     db.run(
//       `INSERT INTO products(name, item, description, retail, price) VALUES(?,?,?,?,?)`,
//       [],

//       function (err) {
//         if (err) {
//           return console.log(err.message);
//         }
//         console.log(`A row has been inserted with row id ${this.lastID}`);
//       }
//     );
//     db.close((err) => {
//       if (err) {
//         console.error(err.message);
//       }
//       console.log("Closed the database connection.");
//     });
//   });
// };

// update a record in the database
// const updateHorse = () => {
//   return new Promise(function (resolve, reject) {
//     let db = new sqlite3.Database("../db/horserace.sqlite3");
//     let data = [];
//     let sql = `UPDATE products SET name = ?, item = ?, description = ?, retail = ?, price = ? WHERE productid = ?`;
//     db.run(sql, data, function (err) {
//       if (err) {
//         return console.error(err.message);
//       }
//       console.log(`Row(s) updated: ${this.changes}`);
//     });
//     db.close((err) => {
//       if (err) {
//         console.error(err.message);
//       }
//       console.log("Closed the database connection.");
//     });
//   });
// };

// delete a record in the database
// const deleteHorse = (productid) => {

//   return new Promise(function (resolve, reject) {
//     // ("DELETE FROM horses WHERE id = $1", [id], (error, results)
//     let db = new sqlite3.Database("../db/horserace.sqlite3");
//     // const sqlId = productid;
//     db.run(
//       `DELETE FROM products WHERE productid = (?)`,
//       // [],
//       productid,
//       // `DELETE FROM products WHERE productid = $1`,
//       // ["productid"],
//       function (err) {
//         // console.log("Kevin was here2", productid);
//         if (err) {
//           return console.log("KEVINH-ERROR wishModel", err.message);
//         }
//         console.log(`A row has been deleted`, productid);
//         // with rowid ${this.lastID}`);
//       }
//     );
//   });
// };
// deleteHorse(); //   THIS WORKS IF VALUE ENTERED INTO THE ARRAY LINE 88
// createHorse(); //THIS WORKS
// updateHorse();  This works

module.exports = {
  getWish,
  // createHorse,
  // updateHorse,
  // deleteHorse,
};
