var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    console.log(req.body);
    let cid = Number(req.body.cid);
    let pid = req.body.pid;
    con.connect(function(err){
        if(err){
            throw err
        }
            let query = "DELETE FROM comments WHERE cid=? AND pid=?";
            con.query(query, [cid, pid], function(err, results, field){
                if(err) throw err;
                res.json(results);
            })
            con.end(function(err){
                if(err) throw err;
            })
    })
});
module.exports = router;