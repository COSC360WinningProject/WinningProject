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
            let searchType = req.query.searchType;
            let searchStr = req.query.searchStr;
            if(searchType == "Name"){
                let query = "SELECT * FROM users WHERE name =" + searchStr;
            }
            else if(searchType == "Email"){
                let query = "SELECT * FROM users WHERE email = " + searchStr;
            }
            else if(searchType == "Post"){
                let query = "SELECT * FROM users WHERE uid = (SELECT uid FROM post WHERE text LIKE '%"+searchStr+"%')";
            }
            con.query(query, function(err, results, field){
                if(err) throw err;
                res.json(results);
            })
        }
    })
});
module.exports = router;