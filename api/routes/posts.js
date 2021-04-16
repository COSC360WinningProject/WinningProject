var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function (req, res, next) {
    let con = mysql.createConnection(dbConfig);
    con.connect(function (err) {
        if (err) {
            throw err;
        }
        let query = `SELECT posts.pid, username, profileImageURL, title, posts.text, mediaURL, posts.likes, category,  COUNT(cid) AS commentcount ` +
        `FROM posts JOIN users ON posts.uid = users.uid ` + 
        `LEFT JOIN comments ON posts.pid = comments.pid ` +
        `GROUP BY pid, username, title, text, media, likes, category;`;
        con.query(query, function (err, results, field) {
            if (err) throw err;
            res.json(results);
            console.log

        })
        con.end(function (err) {
            if (err) throw err;

        })

    })

});

module.exports = router;