var express = require('express');
var multer = require('multer');
var router = express.Router();
var mysql = require('mysql');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/images/users');
    },
    filename : function (req, file ,callback) {
        callback(null, file.originalname);
    }
})
var upload = multer({storage : storage});


router.post("/", upload.single('file'), function(req, res, next){
    console.log(req.file.originalname);
    console.log(req.body.user);
    let newpfpPath = '/images/users/' + req.file.originalname;
    let username = req.body.user;

    let con = mysql.createConnection(dbConfig);
    

    let query = "UPDATE users SET profileImageURL =? WHERE username=?;"
    con.query(query, [newpfpPath, username], function(err, results, field){
        if(err) throw err;
        res.json('success');

    })
    con.end(function(err){
        if(err) throw err;
    }) 

});
module.exports = router;