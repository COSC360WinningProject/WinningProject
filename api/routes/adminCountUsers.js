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
            let filter = req.query.filter;
            let query = "SELECT COUNT(*) FROM users GROUP BY @filter";
            con.query(query, function(err, results, field){
                if(err) throw err;
                res.json(results);
            })
            con.end(function(err){
                if(err) throw err;

            })
        }
    })
});
module.exports = router;