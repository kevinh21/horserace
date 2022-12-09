const sqlite3 = require("sqlite3").verbose();

const upDateHorses = () => {
  return new Promise(function (resolve, reject) {
    // open a database connection
    let db = new sqlite3.Database("../db/horserace.sqlite3");
    let data = ["Kevin Was NOT Here", "Kevin Was Here"];
    let sql = `UPDATE products
            SET description = ?
            WHERE description = ?`;
    db.run(sql, data, function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Row(s) updated: ${this.changes}`);
    });
    db.close();
  });
};

upDateHorses();
