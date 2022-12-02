const sqlite3 = require("sqlite3").verbose();

// open the database
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
