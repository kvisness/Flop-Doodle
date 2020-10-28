const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const { sight_word, audio} = req.body;
    const queryText = `INSERT INTO "words" ("sight_word", "audio") VALUES ($1, $2);`;
    pool.query(queryText, [sight_word, audio])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log("in words router POST", err)
            res.sendStatus(500)
        });
});

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "words"`;
    pool.query(queryText)
        .then((result) => res.send(result.rows))
        .catch((err) => {
            console.log("error in words router GET", err);
            res.sendStatus(500)
        });
});

// router.post('/words', (req, res) => {
//     const games = req.body.username;
//     const queryText = `SELECT * FROM "words" WHERE length(sight_word)=3 ORDER BY RANDOM() LIMIT 10`;//update if more fields are required
//     pool
//         .query(queryText, [games, audio])
//         .then(() => res.sendStatus(201))
//         .catch(() => res.sendStatus(500));
// });

module.exports = router;
