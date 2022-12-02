const sqlite3 = require("sqlite3").verbose();

// open the database connection
let db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    console.error(err.message);
  }
});

db.serialize(() => {
  // Queries scheduled here will be serialized.
  db.run("CREATE TABLE greetings(message text)")
    .run(
      `INSERT INTO greetings(message)
          VALUES('Hi'),
                ('Hello'),
                ('Welcome')`
    )
    .each(`SELECT message FROM greetings`, (err, row) => {
      if (err) {
        throw err;
      }
      console.log(row.message);
    });
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
});
