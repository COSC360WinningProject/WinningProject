var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    let status = req.query.status;
    let uid = req.query.uid;
    con.connect(function(err){
        if(err){
            throw err
        }
        let admin = req.query.admin;
        if(admin==1){
            console.log(username);
            let query = "UPDATE users SET enabled = @status WHERE uid = @uid";
            con.query(query, function(err, results, field){
                if(err) throw err;
                res.json(results);
            })
        }
    })
});
module.exports = router;