const sqlite3 = require("sqlite3").verbose();

// open the database in read-Write mode
let db = new sqlite3.Database(
  "../../src/db/horserace.sqlite3",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Successfully Connected to the Database.");
  }
);

//Execute functions in sequence and assure that each on finishes 
//Serialize() Selects rows in sequence
db.serialize(() => {
  db.each(`SELECT * FROM horses`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);

    // console.log(row.id + "\t" + row.name + "\n");
  });

  db.each(
    `SELECT jockeyid as id2,
                  jockeyName as name2
           FROM jockeys`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id2 + "\t" + row.name2 + "\n");
    }
  );
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Closed the database connection.");
});
/////////////////////////////////////////////////////////////

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