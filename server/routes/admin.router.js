const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// TODO: dont forget to protect these routes
router.get('/', (req, res) => {
    // Send back sight_word object from the session (previously queried from the database)
    // const queryText = `SELECT * FROM "words" WHERE length(sight_word)=3 ORDER BY RANDOM() LIMIT 10;`;
    const queryText = `SELECT * FROM "words" ORDER BY sight_word;`;
    pool.query(queryText)
        .then((result) => res.send(result.rows))
        .catch((err) => {
            console.log("error in admin router GET", err);
            res.sendStatus(500)
        });
});
//allows admin to create new words
router.post('/words', (req, res) => {
    const {sight_word, audio} = req.body;
    const queryText = `INSERT INTO "words" (sight_word, audio)
    VALUES ($1, $2)`;//update if more fields are required
    pool
        .query(queryText, [sight_word, audio])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log("Error in admin router POST", err)
            res.sendStatus(500)
        });
});
//allows admin to create remove words
router.delete('/:id', (req, res) => {
    console.log(req.params);
    console.log(`We can use SQL to delete a word with id ${req.params.id}`)
    let queryText = `DELETE FROM "words" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
        .then(function (result) {
            // we dont care about the result
            // 204 NO CONTENT
            // res.sendStatus(204);
            res.send('Successfully Deleted Word'); // 200
        }).catch(function (err) {
            // uh oh, sql error. 
            console.log('Error making query:', queryText, err);
            // send a SERVER ERROR 500 because things went wrong
            res.sendStatus(500);
        });
});

module.exports = router;
