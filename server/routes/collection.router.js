const { query } = require("express");
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");


router.get("/", (req, res) => {
    console.log("in /collection GET", req.params.id);
    let queryString = `SELECT * FROM "gear" WHERE "user_id" = $1;`;
    const values = [req.user.id];

    pool
      .query(queryString, values)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });

  



module.exports = router;
