const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  
  console.log("INside of the rocks router this is the req.body",req.body);
  const queryString = `INSERT INTO "likes" ("user_id", "gear_id") VALUES ($1, $2);`;
  const values = [
    req.body.user_id,
    req.body.gear_id,
  ];
  pool
    .query(queryString, values)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
