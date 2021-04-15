var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err){
        if(err){
            throw err
        }

            let pid = Number(req.query.pid);
            let query = "SELECT cid, username, text, likes FROM comments JOIN users ON comments.uid = users.uid WHERE pid = ?";
            con.query(query, [pid], function(err, results, field){
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