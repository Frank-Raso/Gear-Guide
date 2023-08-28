const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.delete('/', (req, res) => {
  
  console.log("INside of the unLike router :",req.body);
  const queryString = `DELETE FROM "likes" WHERE "user_id" = $1 AND "gear_id" = $2;`;
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
