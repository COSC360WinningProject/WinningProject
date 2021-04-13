var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err){
        if(err){
            throw err
        }
       // let admin = req.query.admin;
        //if(admin){
            //console.log(username);
            let searchType = req.query.searchType.toLowerCase();
            let searchStr = req.query.searchStr.toLowerCase();
            let query = "";
            if(searchStr && searchType){
                if(searchType === "username"){
                    console.log(searchStr);
                    query = "SELECT * FROM users WHERE username=?";
                }
                else if(searchType == "email"){
                    query = "SELECT * FROM users WHERE email=?";
                }
                con.query(query, [searchStr], function(err, results, field)
            {
                if(err) throw err;
                res.json(results);
            });
            }
            else{
                query = "SELECT * FROM users";
            }
            con.query(query, function(err, results, field)
            {
                if(err) throw err;
                res.json(results);
            });
            
            con.end(function(err){
                if(err) throw err;

            })
            // else if(searchType == "post"){
            //     query = "SELECT * FROM users WHERE uid = (SELECT uid FROM post WHERE text LIKE '%?%')";
            //     con.query(query, [searchStr], function(err, results, field)
            //     {
            //         if(err) throw err;
            //         res.json(results);
            //     });
            // }
         //}
    })
});
module.exports = router;