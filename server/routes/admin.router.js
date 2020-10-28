const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    // Send back sight_word object from the session (previously queried from the database)
    const queryText = `SELECT * FROM "words"`;
    pool.query(queryText)
        .then((result) => res.send(result.rows))
        .catch((err) => {
            console.log("error in admin router GET", err);
            res.sendStatus(500)
        });
});

router.post('/', (req, res) => {
    const {sight_word, audio} = req.body;
    const queryText = `INSERT INTO "words" (sight_word, audio)
    VALUES ($1, $2)`;//update if more fields are required
    pool
        .query(queryText, [sight_word, audio])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log("in admin router POST", err)
            res.sendStatus(500)
        });
        
});

module.exports = router;
