var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err){
        if(err){
            throw err
        }
        let admin = req.query.admin;
        if(admin==1){
            console.log(username);
            let query = "SELECT posts.category, COUNT(*) AS COUNT FROM posts GROUP BY items.category";
            con.query(query, function(err, results, field){
                if(err) throw err;
                res.json(results);
            })
        }
    })
});
module.exports = router;