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

        let query = "SELECT * FROM comments WHERE uid = ?";
        con.query(query,[2], function(err, results, field){
            if(err) throw err;
            res.json(results);
            
        })
        con.end(function(err){
            if(err) throw err;
            console.log(err);
        })
        
    })

});

module.exports = router;