const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//     // POST route code here
// });

module.exports = router;
