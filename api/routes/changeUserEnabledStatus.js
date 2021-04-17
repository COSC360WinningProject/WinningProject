var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    let status = req.body.status;
    let uid = req.body.uid;
    let newStatus = status ? 0 : 1;
    con.connect(function(err){
        if(err){
            throw err
        }
       
            console.log(uid);
            let query = "UPDATE users SET enabled=? WHERE uid=?";
            con.query(query,[newStatus, uid], function(err, results, field){
                if(err) throw err;
                res.json(results);
            })
            con.end(function(err){
                if(err) throw err;

            })
        }
       
    )
});
module.exports = router;