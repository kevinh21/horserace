const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("../db/horserace.sqlite3");

let sql = `SELECT vendor, item, description, retail, sale FROM products`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.vendor, row.item, row.description, row.retail, row.sale);
  });
});

// close the database connection
db.close();