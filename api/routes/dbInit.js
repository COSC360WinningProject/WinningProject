//jshint esversion:8
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const fs = require('fs');

router.get("/", function(req, res, next) {
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err) {
        if(err) 
        {
            throw err;
        }
        res.send("Connected");
        let data = fs.readFileSync("./data/db1.ddl", {encoding: 'utf8' });
        let commands = data.split(";");
        for(let i = 0; i < commands.length - 1; i++) {
            let command = commands[i];
            con.query(command, function(err, result){
                if(err)
                {
                    throw err;
                }
                console.log(`${command} run.`);
            });
        }
    })



});

module.exports = router;