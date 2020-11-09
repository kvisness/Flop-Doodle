const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



router.put('/', rejectUnauthenticated, (req, res) => {//stores on db user high score if higher than previous score
    const queryText = `UPDATE "user" SET "highscore"=$1 WHERE "id"=$2;`;

    pool.query(queryText, [req.body.highscore, req.user.id])
        .then((result) => res.sendStatus(200))
        .catch((err) => {
            console.log("error in currentGame router PUT", err);
            res.sendStatus(500)
        });
});

module.exports = router;
