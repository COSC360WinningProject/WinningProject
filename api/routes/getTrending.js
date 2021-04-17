var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err){
        if(err){
            throw err
        }
        let query = "SELECT pid, title, text, mediaURL, category FROM posts  ORDER BY likes DESC LIMIT 5"
        con.query(query, function(err, results, field){
            if(err) throw err;
            console.log(results);
            res.json(results);
        })
        con.end(function(err){
            if(err) throw err;
        })
    })

});
module.exports = router;