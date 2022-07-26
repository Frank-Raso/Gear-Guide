const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('in /profile GET');
    let queryString = `SELECT * FROM "gear" WHERE "user_id" = $1;`;
    let values = [req.user.id];
    pool.query(queryString,values).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})


router.get('/gear/:id', (req, res) => {
    console.log(req.params);
    const queryString = `SELECT * FROM "gear" WHERE gear.id = $1;`;
    const values = [req.params.id];
    pool.query(queryString, values).then(result => {
      res.send(result.rows)
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
  })

module.exports = router; 

