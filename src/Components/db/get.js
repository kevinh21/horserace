const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("./product.db3");

let sql = `SELECT PlaylistId id,
                  Name name
           FROM Playlist
           WHERE PlaylistId  = ?`;
let PlaylistId = 3;

// first row only
db.get(sql, [PlaylistId], (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  return row
    ? console.log(row.id, row.name)
    : console.log(`No playlist found with the id ${PlaylistId}`);
});

// close the database connection
db.close();
