var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function(req, res, next) {
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err) {
        if(err) 
        {
            throw err;
        }
        let username = req.query.username;
        if(username)
        {
            console.log(username)
        }
        console.log(req.query.email);
        console.log(req.query.username);
        let query = "INSERT INTO users (admin, username, password, email, address, phone) VALUES(0, ?, 'password', ?, '6789 road street', '444-444-4444')";
        con.query(query,['preparedUsername', 'preparedEmail@email'], function(err, results, field){
            if(err) throw err;
            res.json(results);
            
        })
        
    })

});

module.exports = router;