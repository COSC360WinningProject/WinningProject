var express = require("express");
var router = express.Router();
var mysql = require('mysql');


router.post("/", function (req, res, next) {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    console.log(email);
    console.log(password);
    let success = false;
    let con = mysql.createConnection(dbConfig);
    con.connect(function (err) {
        if (err) {
            console.log(err);
            throw err;
        }
        let query = "SELECT username, admin from users WHERE email=? AND password=?";
        con.query(query, [email, password], function (err, results, field) {
            if (err){
                console.log(err);
            }

            // query was successful
            console.log(results);
            success = (results.length > 0);
            returnUser = success ? results[0].username : null;

            res.json({
                'login': success,
                'user': returnUser,
                'isAdmin': results[0] ? results[0].admin : 0
            });


        })
        con.end(function (err) {
            if (err) throw err;

        })
    })

});

module.exports = router;