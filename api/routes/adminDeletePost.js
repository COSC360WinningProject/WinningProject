var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    let pid = req.query.pid;
    con.connect(function(err){
        if(err){
            throw err
        }
        let admin = req.query.isAdmin;
        if(admin==1){
            console.log(username);
            let query = "DELETE * FROM post WHERE pid = ?";
            con.query(query, [pid], function(err, results, field){
                if(err) throw err;
                res.json(results);
            })
            con.end(function(err){
                if(err) throw err;

            })
        }
        else{
            res.status(500).send('User not logged in as admin');
        }
    })
});
module.exports = router;