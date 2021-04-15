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

router.get("/", upload.single('file'), function(req, res, next) {
    console.log(req.file.originalname);
    console.log(req.body);

    let newPostMediaPath = '/images/posts/' + req.file.originalname;
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err) {
        if(err) 
        {
            throw err;
        }

        let query = "INSERT INTO post (uid, title, text, likes, upvotes, downvotes) VALUES(?, ?, ?, 0, 0, 0)";
        con.query(query,[2, 'Post 4', 'About 4'], function(err, results, field){
            if(err) throw err;
            res.json(results);
            
        })
        con.end(function(err){
            if(err) throw err;

        })
        
    })

});

module.exports = router;