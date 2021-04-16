var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    console.log(req.body);
    let cid = req.body.cid;
    con.connect(function(err){
        if(err){
            throw err
        }
        let admin = req.body.isAdmin;
        if(admin==1){
            console.log(username);
            let query = "DELETE FROM comment WHERE cid=?";
            con.query(query, [cid], function(err, results, field){
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