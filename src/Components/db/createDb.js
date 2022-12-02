//WILL CREATE A NEW DATABASE FILE AND INSERT A PRODUCTS TABLE

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./sample.db");

db.run("CREATE TABLE products(name text)");

db.close();
