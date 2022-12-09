// In bash terminal run -- "node PgApi.js" -- to start the express/node service on port 3001 as defined below
// This will ultimately allow you to connect react to the postgresql database in the react-postgres namespace
// Creates an "Express application". "Epress is a web framework that creates Basic Routes" (listening on port 3001).
//    The express() function is a top-level function exported by the express module.

import express, { json } from "express";
import { getMerchants, createMerchant, deleteMerchant } from "./merchant_model";
const app = express();
const port = 3001;

// (-- import express, { json } from "express" --) parses incoming requests with JSON payloads with the app object -app.use() and app.method() functions
app.use(json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});
//  Status 200 OK success, Status 500 Internal Server Error - fail.
app.get("/", (req, res) => {
  getMerchants()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/merchants", (req, res) => {
  createMerchant(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete("/merchants/:id", (req, res) => {
  deleteMerchant(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
