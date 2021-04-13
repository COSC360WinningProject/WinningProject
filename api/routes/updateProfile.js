var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    console.log(req.body);
    res.json(req.body);

    let newFirstName = req.body.newFirstName;
    let newLastName = req.body.newLastName;
    let newEmail = req.body.newEmail;
    let newAddress = req.body.newAddress;
    let newPhone = req.body.newPhone;
    let username = req.body.username;

    let query = "UPDATE users SET firstname=?, lastname=?, email=?, address=?, phone=? WHERE username=?;"
    con.query(query, [newFirstName, newLastName, newEmail, newAddress, newPhone, username], function(err, results, field){
        if(err) throw err;

    })
    con.end(function(err){
        if(err) throw err;
    })
});
module.exports = router;