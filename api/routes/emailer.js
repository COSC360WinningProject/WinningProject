const { SMTP_URL } = process.env;
const nodemailer = require('nodemailer');
const defaultEmailData = {from: 'EvilReddit@gmail.com'};
var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next){
    let con = mysql.createConnection(dbConfig);
    con.connect(function(err){
        if(err){
            throw err
        }
        else{
            sendEmail();
        }
    })
})

const randomString = length => {
    let text="";
            const possible = "abcdefghijklmnopqrstuvwxyz0123456789_-.";
            for(let i=0;i<length;i++){
                text+= possible.charAt(Math.floor(Math.random() *possible.length));
            }
            return text;
}
const sendEmail = () =>{
    let email = req.body.email;
    console.log("Email: " + email);
            if(email){
                const token = randomString(40);
                const emailData = {
                    to: req.body.email,
                    subject: "Evil Reddit Password Reset Instructions",
                    text: `Please use the following token to reset your password: ${token}`,
                    html: `<p>Please use the following token to reset your password: ${token}</p>`
                };
            }
            else{
                res.status(500).send("No email sent to server");
            }

    const completeEmailData = Object.assign(defaultEmailData, emailData);
    const transporter = nodemailer.createTransport(SMTP_URL);
    return transporter
    .sendMail(completeEmailData)
    .then(info => console.log(`Message sent: ${info.response}`))
    .catch(err => console.log(`Problem sending email: ${err}`));
    res.json(token);
}
module.exports = router;