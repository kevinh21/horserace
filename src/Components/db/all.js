const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("../db/horserace.sqlite3");

let sql = `SELECT name, item, description, retail, price FROM products`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name, row.item, row.description, row.retail, row.price);
  });
});

// close the database connection
db.close();
