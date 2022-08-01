const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



  router.put('/', (req, res) => {
    console.log(req.body);
    const queryString = `UPDATE "gear" SET  "image"=$1 WHERE id=$2;`;
    const values = [ req.body.image, req.body.id];
    pool.query(queryString, values).then((result) => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
  });




module.exports = router;  