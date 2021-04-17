var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post("/", function (req, res, next) {
    let con = mysql.createConnection(dbConfig);
    let cid = req.body.cid;
    let pid = req.body.pid;
    let text = req.body.text;
    console.log(req.body);
    con.connect(function (err) {
        if (err) {
            throw err
        }
       
            let query = `UPDATE comments SET text = ? WHERE cid = ? AND pid = ?`;
            con.query(query, [text, cid, pid], function (err, results, field) {
                if (err) throw err;
                res.json(results);
            })
            con.end(function (err) {
                if (err) throw err;
            })
        }
    
    )
});
module.exports = router;