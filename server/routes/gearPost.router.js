const { query } = require("express");
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log(req.body);
  let queryString = `INSERT INTO "gear" ("title", "review", "year", "user_id", "type_id", "image", "user_name") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  let values = [
    req.body.title,
    req.body.review,
    req.body.year,
    req.body.user_id,
    req.body.type_id,
    req.body.image,
    req.body.user_name,
  ];
  pool
    .query(queryString, values)
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
// makes calls to add new gear data done.
