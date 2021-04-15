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
            if(report != "post")
                query = "SELECT ?, category, COUNT(*) AS Count FROM ? AS r JOIN posts ON r.pid = posts.pid GROUP BY category";
            else
                query = "SELECT ?, category, COUNT(*) AS Count FROM ? GROUP BY category";
            con.query(query, [filter, report], function(err, results, field){
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