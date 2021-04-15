var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err){
        if(err){
            throw err
        }
        //let admin = req.query.admin;
        //if(admin==1){
            let filter = req.query.filter.toLowerCase();
            let report = req.query.report.toLowerCase(); 
            console.log("filter: " + filter);
            console.log("report: " + report);
            let query = "";
            if(report == "comments"){
                if(filter=="likes")
                    query = "SELECT comments.likes, category FROM comments JOIN posts ON comments.pid = posts.pid GROUP BY category, likes";
                else if(filter == "count"){
                    query = "SELECT Count(*), category FROM comments GROUP BY category";
                }
            }else if(report=="posts"){
                    if(filter=="likes")
                        query = "SELECT posts.likes, category, FROM posts JOIN comments ON comments.pid = posts.pid GROUP BY category, likes";
                    else if(filter=="count")
                        query = "SELECT Count(*), category FROM comments GROUP BY category";
                }
            con.query(query, function(err, results, field){
                if(err) throw err;
                res.json(results);
            })
            con.end(function(err){
                if(err) throw err;

            })
        //}
    })
});
module.exports = router;