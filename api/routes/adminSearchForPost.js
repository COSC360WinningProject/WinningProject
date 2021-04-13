var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err){
        if(err){
            throw err
        }

        let searchType = req.query.searchType.toLowerCase();
        let searchStr = req.query.searchStr.toLowerCase();
        console.log(searchType);
        console.log(searchStr);
        
        let query = "";
        if(searchStr && searchType){
            if(searchType === "title"){
                console.log('inside if');
                query = "SELECT pid, username, title, likes, upvotes, downvotes, category FROM posts JOIN users ON posts.uid = users.pid WHERE title=?";
                con.query(query, [searchStr], function(err, results, field)
                {
                    if(err) throw err;
                    res.json(results);
                });
            }
            else if(searchType == "category"){
                query = "SELECT pid, username, title, likes, upvotes, downvotes, category FROM posts JOIN users ON posts.uid = users.pid posts WHERE category=?";
                con.query(query, [searchStr], function(err, results, field)
                {
                    if(err) throw err;
                    res.json(results);
                });
            }
            
        }
        else{
            query = "SELECT pid, username, title, likes, upvotes, downvotes, category FROM posts JOIN users ON posts.uid = users.uid;";
            console.log('inside else');
            con.query(query, function(err, results, field)
            {
                if(err) throw err;
                res.json(results);
            });
        }
        
        con.end(function(err){
            if(err) throw err;
        })
    })
});
module.exports = router;