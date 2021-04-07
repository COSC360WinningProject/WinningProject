var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function(req, res, next) {
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err) {
        if(err) 
        {
            console.log(err);
            throw err;
        }
        let query = "SELECT * FROM users";
        con.query(query, function(err, results, field){
            if(err) throw err;
            res.json(results);
            
        })
        
    })

});

module.exports = router;