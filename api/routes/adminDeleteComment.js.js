var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    let cid = req.query.cid;
    con.connect(function(err){
        if(err){
            throw err
        }
        let admin = req.query.admin;
        if(admin==1){
            console.log(username);
            let query = "DELETE * FROM comments WHERE cid = ?";
            con.query(query, [cid], function(err, results, field){
                if(err) throw err;
                res.json(results);
            })
        }
    })
});
module.exports = router;