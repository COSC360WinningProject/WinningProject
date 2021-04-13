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
        let x = 1;
        let query = "SELECT * FROM post JOIN comments ON post.pid = comments.pid WHERE post.pid = ?";
        con.query(query,[x], function(err, results, field){
            if(err) throw err;
            res.json(results);
            
        })
        con.end(function(err){
            if(err) throw err;

        });
        
    })

});

module.exports = router;