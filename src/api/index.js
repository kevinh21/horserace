// const { response } = require("express");
// let db = new sqlite3.Database("../Components/db/horserace.sqlite3");
const horseModel = require("./horseModel");
const cartModel = require("./cartModel");
const wishModel = require("./wishModel");
const express = require("express");
const wish = express();
const app = express();
const cart = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3001;
const sqlite3 = require("sqlite3").verbose();
const productInsert = `INSERT INTO products(name, item, description, retail, price) VALUES(?,?,?,?,?)`;
const cartInsert = `INSERT INTO cart(productid, item, price, user, count) VALUES(?,?,?,?,?)`;
const wishInsert = `INSERT INTO wish(productid, item, price, user) VALUES(?,?,?,?)`;

new Promise(function (resolve, reject) {
  /////////////////Products & Horse ACCESS////////////////////////////////
  ////////////////

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.json());
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Access-Control-Allow-Headers"
    );
    next();
  });
  /////////////////CART TABLE ACCESS////////////////////////////////
  cart.use(bodyParser.urlencoded({ extended: true }));
  cart.use(cors());
  cart.use(express.json());
  cart.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Access-Control-Allow-Headers"
    );
    next();
  });

  /////////////////WISH TABLE ACCESS////////////////////////////////
  wish.use(bodyParser.urlencoded({ extended: true }));
  wish.use(cors());
  wish.use(express.json());
  wish.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Access-Control-Allow-Headers"
    );
    next();
  });

  /////////////BEGIN PRODUCTS & HORSE SQL FUNCTIONS//////////////////////
  ////////////////
  //read function
  app.get("/", (req, res, next) => {
    horseModel
      .getHorses()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  //"create(INSERT)" function for "Products"
  app.post("/products", (req, res) => {
    let db = new sqlite3.Database(
      "../Components/db/horserace.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
    const name = req.body.name;
    const item = req.body.item;
    const description = req.body.description;
    const retail = req.body.retail;
    const price = req.body.price;
    db.serialize(() => {
      db.run(
        productInsert,
        [name, item, description, retail, price],
        (err) => {
          if (err) {
            return console.log(err.message);
          }
        }
      );
      console.log(`A row has been inserted with row id ${this.lastID}`);
      db.close((err) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Closed the database connection.");
      });
    });
  });
});
//  "update" function
new Promise(function (resolve, reject) {
  app.put("/products", (req, res) => {
    let db = new sqlite3.Database(
      "../Components/db/horserace.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
    const instance = req.body.productid;
    const name = req.body.name;
    const item = req.body.item;
    const description = req.body.description;
    const retail = req.body.retail;
    const price = req.body.price;
    const dbUpdate = `UPDATE products SET name = ?, item = ?, description = ?, retail = ?, price = ? WHERE productid = ?`;
    db.run(
      dbUpdate,
      [name, item, description, retail, price, instance],
      (err) => {
        if (err) {
          return console.log(err.message);
        }
      }
    );
    console.log(`A record has been updated ${req.body.productid}`);
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Closed the database connection.");
    });
  });
  // });

  //  "delete" function
  app.delete(`/products/:productid`, (req, res) => {
    let db = new sqlite3.Database(
      "../Components/db/horserace.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
    const idDeleted = req.params.productid;
    const sqlDelete = `DELETE FROM products WHERE productid = (?)`;
    db.run(sqlDelete, idDeleted, (err, result) => {
      if (err) console.log("KEVINH", err.message);
      // db.close(err);
    });
  });

  ////////////////////BEGIN CART SQL FUNCTIONS///////////////////////////////////
  //////////////

  //read function
  cart.get("/cart", (req, res, next) => {
    cartModel
      .getCart()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  //"create(CART INSERT)" function for "Products"
  cart.post("/cart", (req, res) => {
    let db = new sqlite3.Database(
      "../Components/db/horserace.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
    const productid = req.body.productid;
    const item = req.body.item;
    const price = req.body.price;
    const user = req.body.user;
    const count = req.body.count;

    db.serialize(() => {
      db.run(cartInsert, [productid, item, price, user, count], (err) => {
        if (err) {
          return console.log(err.message);
        }
      });
      console.log(`A row has been inserted with row id ${this.lastID}`);
      db.close((err) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Closed the database connection.");
      });
    });
  });

  // "update" function
  cart.put("/cart", (req, res) => {
    let db = new sqlite3.Database(
      "../Components/db/horserace.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
    const instance = req.body.cartid;
    // const productid = req.body.productid;
    // const item = req.body.item;
    // const price = req.body.price;
    // const user = req.body.user;
    const count = req.body.count;
    const cartUpdate = `UPDATE cart SET count = ? WHERE cartid = ?`;
    db.run(cartUpdate, [count, instance], (err) => {
      if (err) {
        return console.log(err.message);
      }
    });
    console.log(`A record has been updated ${req.body.cartid}`);
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Closed the database connection.");
    });
  });

  cart.delete(`/cart/:cartid`, (req, res) => {
    let db = new sqlite3.Database(
      "../Components/db/horserace.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
    const idDeleted = req.params.cartid;
    const sqlDelete = `DELETE FROM cart WHERE cartid = (?)`;
    db.run(sqlDelete, idDeleted, (err, result) => {
      if (err) console.log("CART-DELETE", err.message);
      // db.close(err);
    });
  });

  ////////////////////BEGIN WISH SQL FUNCTIONS///////////////////////////////////
  //////////////////
  //read function
  wish.get("/wish", (req, res, next) => {
    wishModel
      .getWish()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  //"create New (WISH INSERT)" function for "Products"
  wish.post("/wish", (req, res) => {
    let db = new sqlite3.Database(
      "../Components/db/horserace.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
    const productid = req.body.productid;
    const item = req.body.item;
    const price = req.body.price;
    const user = req.body.user;
    // const image = req.body.image;

    db.serialize(() => {
      db.run(wishInsert, [productid, item, price, user], (err) => {
        if (err) {
          return console.log(err.message);
        }
      });
      console.log("product-ID", productid);

      console.log(`A row has been inserted with row id ${this.lastID}`);
      db.close((err) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Closed the database connection.");
      });
    });
  });
  //////////////////////////////////////////////////
  // //"update" function
  wish.put("/wish", (req, res) => {
    let db = new sqlite3.Database(
      "../Components/db/horserace.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
    const instance = req.body.wishid;
    const productid = req.body.productid;
    const item = req.body.item;
    const user = req.body.user;
    const price = req.body.price;
    const wishUpdate = `UPDATE wish SET productid = ?, item = ?, user = ?, price = ? WHERE wishid = ?`;
    db.run(wishUpdate, [productid, item, user, price, instance], (err) => {
      if (err) {
        return console.log(err.message);
      }
    });
    console.log(`A record has been updated ${req.body.wishid}`);
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Closed the database connection.");
    });
  });

  wish.delete(`/wish/:wishid`, (req, res) => {
    let db = new sqlite3.Database(
      "../Components/db/horserace.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
    const idDeleted = req.params.wishid;
    const sqlDelete = `DELETE FROM wish WHERE wishid = (?)`;
    db.run(sqlDelete, idDeleted, (err, result) => {
      if (err) console.log("WISH-DELETE", err.message);
      // db.close(err);
    });
  });
});
///////////////////BEGIN PORT MAPPING/////////////////////////////////////
cart.listen(4001);
wish.listen(5001);
cart.listen(4002);
wish.listen(5002);

// horse.listen();
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
