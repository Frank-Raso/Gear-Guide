const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.put('/', (req, res) => {
    console.log(req.body);
    const queryString = `UPDATE "gear" SET "title"=$1, "review"=$2, "year"=$3, "user_id"=$4, "type_id"=$5 WHERE id=$6;`;
    const values = [req.body.title, req.body.review, req.body.year, req.body.user_id, req.body.type_id , req.body.id];
    pool.query(queryString, values).then((result) => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
  });



module.exports = router;  