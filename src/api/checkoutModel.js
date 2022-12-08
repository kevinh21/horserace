// https://discuss.codecademy.com/t/why-use-db-each-instead-db-all-or-db-get-in-node-sqlite/381382
// db.get, db.each, db.all

const sqlite3 = require("sqlite3").verbose();
// let db = new sqlite3.Database("../db/horserace.sqlite3");

// open the database and read the list of all tables

function getCheckout() {
  return new Promise(function (resolve, reject) {
    let db = new sqlite3.Database("../Components/db/horserace.sqlite3");
    let sql = `SELECT * FROM checkout`;


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


module.exports = {
  getCheckout,
 
};
