const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




router.get('/', (req, res) => {
    res.send(req.user);
    // Send back sight_word object from the session (previously queried from the database)
    const queryText = `SELECT * FROM "words" WHERE length(sight_word)=3 ORDER BY RANDOM() LIMIT 10;`;
    
    pool.query(queryText)
        .then((result) => res.send(result.rows))
        .catch((err) => {
            console.log("error in admin router GET", err);
            res.sendStatus(500)
        });
});

module.exports = router;