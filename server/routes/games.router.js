const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // Send back game_type object from the session (previously queried from the database)
    //this should only show the types of games
    const queryText = `SELECT "game_type" FROM "games";`;
    pool.query(queryText)//returns the list of games from the database
        .then((result) => res.send(result.rows))
        .catch((err) => {
            console.log("error in admin router GET", err);
            res.sendStatus(500)
        });
});

/**
 * POST route template
 */
// router.post('/play', (req, res) => {
//     // POST route code here
// });

module.exports = router;
