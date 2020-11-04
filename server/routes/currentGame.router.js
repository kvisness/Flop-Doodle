const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:word_length?',  (req, res) => { 
    const wordLength = req.params.word_length || 3;//default to 3 letters if undefined
    // Send back sight_word object from the session (previously queried from the database)
    const queryText = `SELECT * FROM "words" WHERE length(sight_word)=$1 ORDER BY RANDOM() LIMIT 10;`;
    
    pool.query(queryText, [wordLength])
        .then((result) => res.send(result.rows))
        .catch((err) => {
            console.log("error in currentGame router GET", err);
            res.sendStatus(500)
        });
});

module.exports = router;