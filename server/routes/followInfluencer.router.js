const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log(req.body);
  let queryString = `INSERT INTO "follows" ("follower_id", "followee_id") VALUES ($1, $2);`;
  let values = [
    req.body.followerId,
    req.body.influencerId,
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
