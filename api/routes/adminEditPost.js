var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    let pid = req.body.pid;
    let text = req.body.text;
    let title = req.body.title;
    let category = req.body.category;
    con.connect(function(err){
        if(err){
            throw err
        }
        
            let query = `UPDATE posts ` +
            `SET text = ?, ` +
            `title = ?, ` +
            `category = ? ` +
            `WHERE pid = ?;`;
            con.query(query, [text, title, category, pid], function(err, results, field){
                if(err) throw err;
                res.json(results);
            })
            con.end(function(err){
                if(err) throw err;

            })
        }
       
    )
});
module.exports = router;