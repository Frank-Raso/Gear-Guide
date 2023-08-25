const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.delete('/', (req, res) => {
    console.log('in server/routes/unFollowInfluencer.router.js DELETE');
    console.log(req.body);
    const queryString = `DELETE FROM "follows" WHERE follower_id = $1 AND followee_id = $2;`;
    let values = [
        req.body.followerId,
        req.body.influencerId,
      ];
      pool
        .query(queryString, values)
        .then((results) => {
          res.sendStatus(204);  // No Content
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500);
        });
    });
    
    module.exports = router;
  