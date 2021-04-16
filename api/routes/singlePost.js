var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function (req, res, next) {
    let pid = req.query.pid;
    console.log(pid);
    let con = mysql.createConnection(dbConfig);
    con.connect(function (err) {
        if (err) {
            throw err;
        }
        let query = `SELECT posts.pid, title, posts.text, mediaURL, posts.likes, username, profileImageURL, COUNT(cid) AS commentcount ` +
            `FROM posts JOIN users ON posts.uid = users.uid ` +
            `LEFT JOIN comments ON posts.pid = comments.pid ` +
            `GROUP BY pid, title, text, mediaURL, likes, username, profileImageURL ` +
            `HAVING pid = ?;`; 
        con.query(query, [pid], function (err, results, field) {
            if (err) throw err;
            console.log(results);
            res.json(results);

        })
        con.end(function (err) {
            if (err) throw err;

        })

    })

});

module.exports = router;