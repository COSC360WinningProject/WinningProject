var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function(req, res, next) {
    let pid = req.query.pid;
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err) {
        if(err) 
        {
            throw err;
        }
        
        let query = "SELECT username, text, likes FROM comments JOIN users ON comments.uid = users.uid WHERE pid = ?";
        con.query(query,[pid], function(err, results, field){
            if(err) throw err;
            res.json(results);
            
        })
        con.end(function(err){
            if(err) throw err;

        });
        
    })

});

module.exports = router;