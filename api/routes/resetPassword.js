var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function(req, res, next){
    console.log(req.body);
    let con = mysql.createConnection(dbConfig);
    let newPassword = req.body.newPassword;
    let email = req.body.email;

    console.log(email);
    console.log(newPassword);

    if(!newPassword || !email){
        console.log('missing newPassword or email')
    }
    else{
        console.log('in else');
        let query = "UPDATE users SET password = ? WHERE email = ?"
        con.query(query,[newPassword, email], function(err, results, field){
            if(err) throw err;
            res.json(results);
        })
        con.end(function(err){
            if(err) throw err;

        })
    }
})
module.exports = router;