var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function (req, res, next) {
    let pid = req.query.pid;
    let con = mysql.createConnection(dbConfig);
    con.connect(function (err) {
        if (err) {
            throw err
        }

        

        query = "UPDATE posts SET likes = likes + 1 WHERE pid = ?";
        con.query(query, [pid], function (err, results, field) {
            if (err) throw err;
            console.log(results);
            res.json(results);
        });
        con.end(function(err){
            if(err) throw err;
        });
    })
});


module.exports = router;