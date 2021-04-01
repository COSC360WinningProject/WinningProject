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

        let query = "INSERT INTO users (admin, username, password, email, address, phone) VALUES(0, ?, 'password', ?, ?, ?)";
        con.query(query,['preparedUsername', 'preparedEmail@email', 'sample address', 'sample phone'], function(err, results, field){
            if(err) throw err;
            res.json(results);
            
        })
        
    })

});

module.exports = router;