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
                    query = "SELECT category, SUM(comments.likes) AS likes FROM comments JOIN posts ON comments.pid = posts.pid GROUP BY category";
                else if(filter == "count"){
                    query = "SELECT category, Count(cid) FROM comments JOIN posts ON comments.pid = posts.pid GROUP BY category";
                }
            }else if(report=="posts"){
                    if(filter=="likes")
                        query = "SELECT category, SUM(posts.likes) AS likes FROM posts JOIN comments ON comments.pid = posts.pid GROUP BY category";
                    else if(filter=="count")
                        query = "SELECT category, Count(pid) FROM posts GROUP BY category";
                }
            else if(reports=="users"){
                    if(filter=="posts")
                        query = "SELECT username, Count(pid) FROM users JOIN posts ON users.uid = posts.uid GROUP BY username";
                    else if(filter=="comments")
                        query = "SELECT username, Count(cid) FROM users JOIN comments ON users.uid = comments.uid GROUP BY username";
                    
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