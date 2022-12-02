const sqlite3 = require("sqlite3").verbose();

// open a database connection
let db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    console.error(err.message);
  }
});

db.parallelize(() => {
  dbSum(1, 11, db);
  dbSum(2, 9, db);
  dbSum(3, 3, db);
  dbSum(4, 4, db);
  dbSum(5, 5, db);
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
});

function dbSum(a, b, db) {
  db.get("SELECT (? + ?) sum", [a, b], (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(`The sum of ${a} and ${b} is ${row.sum}`);
  });
}
