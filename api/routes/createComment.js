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

        let query = "INSERT INTO comments (uid, pid, text, likes, upvotes, downvotes) VALUES(?, ?, ?, ?, ?, ?)";
        con.query(query,[2, 2, 'sample comment', 0, 0, 0], function(err, results, field){
            if(err) throw err;
            res.json(results);
            
        })
        con.end(function(err){
            if(err) throw err;

        })
        
    })

});

module.exports = router;