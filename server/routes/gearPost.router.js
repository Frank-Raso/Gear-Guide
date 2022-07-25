const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
    console.log(req.body);
    let queryString = `INSERT INTO "gear" ("title", "review", "year", "user_id", "type_id") VALUES ($1, $2, $3, $4, $5);`
    let values = [req.body.title, req.body.review, req.body.year, req.body.user_id, req.body.type_id];
    pool.query(queryString, values).then((results) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router; 
// makes calls to add new gear data done.