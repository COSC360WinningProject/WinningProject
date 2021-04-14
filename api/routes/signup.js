var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function (req, res, next) {
    let con = mysql.createConnection(dbConfig);
    console.log(req.body);

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    con.connect(function (err) {
        if (err) {
            throw err;
        }

        let query = "INSERT INTO users (admin, username, password, email) VALUES(0, ?, ?, ?)";
        con.query(query, [username, password, email], function (err, results, field) {
            if (err) throw err;
            res.json(results);

        })
        con.end(function (err) {
            if (err) throw err;
        })

    })

});

module.exports = router;