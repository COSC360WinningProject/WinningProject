var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err){
        if(err){
            throw err
        }
        let email = req.query.email;
        if(email){
            let query = "SELECT email FROM users WHERE email = ?";
            con.query(query, function(err, results, field)
            {
                if(err) throw err;
                res.json(results);
            });
            
            con.end(function(err){
                if(err) throw err;

            })
         }
         else{
            res.status(404).send('Email not found');
        }
    })
});
module.exports = router;