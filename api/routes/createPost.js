var express = require('express');
var multer = require('multer');
var router = express.Router();
var mysql = require('mysql');

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images/posts');
    },
    filename : function (req, file, callback) {
        callback(null, file.originalname);
    }
})

var upload = multer({storage : storage});

router.post("/", upload.single('file'), function(req, res, next) {
    console.log(req.file.originalname);
    console.log(req.body);
    let imagePath = "/images/posts/" + req.file.originalname;
    let username = req.body.username;
    let title = req.body.title;
    let text = req.body.description;
    let category = req.body.category;

    
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err) {
        if(err) 
        {
            throw err;
        }
        
        let query = "INSERT INTO posts (uid, title, text, category, mediaURL, likes) VALUES((SELECT uid FROM users WHERE username = ? LIMIT 1), ?, ?, ?, ?, 0)";
        con.query(query,[username, title, text, category, imagePath], function(err, results, field){
            if(err) throw err;
            console.log(results);
            res.json(results);
            
        })
        con.end(function(err){
            if(err) throw err;

        })
        
    })

});

module.exports = router;