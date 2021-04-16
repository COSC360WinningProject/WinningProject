var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const randomString = length => {
    let text="";
            const possible = "abcdefghijklmnopqrstuvwxyz0123456789_-.";
            for(let i=0;i<length;i++){
                text+= possible.charAt(Math.floor(Math.random() *possible.length));
            }
            return text;
}

// router.put('api/forgotPassword',(req, res) => {
//         let email = req.query.email;
//         if(email){
//             const token = randomString(40);
//             const emailData = {
//                 to: req.body.email,
//                 subject: "Evil Reddit Password Reset Instructions",
//                 text: `Please use the following link to reset your password: ${APP_URL_BASE}/resetPassword?token=${token}`,
//                 html: `<p>Please use the following link to reset your password: ${APP_URL_BASE}/resetPassword?token=${token}</p>`
//             };
//             return User
//             .update({ email: req.body.email}, {$set: {resetPassLink: token }}, function(err, feedback){
//                 if(err) res.send(err);
//                 else{
//                     sendEmail(emailData);
//                     res.status(200).json({message: `Email has been sent to ${req.body.email}`});
//                 }
//             })
//         }
//         else{
//             res.status(404).send("No email sent to server");
//         }
// })


// router.put('/api/resetPassword', (req, res) => {
//     const {resetPassLink, newPassword} = req.body;
//     User.hashPassword(newPassword)
//     .then(hashedPass => {
//         return User.update({resetPassLink}, { $set: { password: hashedPass, resetPassLink: ''}}, function(err, feedback){
//             if(err) res.send(err);
//             res.send(feedback)
//         })
//     })
// })