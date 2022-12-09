const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(`./ecomm.db3:,sqlite3.OPEN_READWRITE,(err) =>{
    if(err){
        console.error(err.message);
        return;
}`);

console.log("ConnectED to the Ecommerce SQlite database.");

db.serialize(() => {
  db.each(`SELECT id as id, productName as name FROM products`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection");
});
