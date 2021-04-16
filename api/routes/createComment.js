var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function(req, res, next) {
    console.log(req.body);
    let user = req.body.user;
    let text = req.body.text;
    let pid = req.body.pid;
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err) {
        if(err) 
        {
            throw err;
        }

        let query = `INSERT INTO comments (uid, pid, text, likes) ` +
        `VALUES((SELECT uid FROM users WHERE username =? LIMIT 1), ?, ?, 0)`;
        con.query(query,[user, pid, text], function(err, results, field){
            if(err) throw err;
            res.json(results);
            
        })
        con.end(function(err){
            if(err) throw err;

        })
        
    })

});

module.exports = router;