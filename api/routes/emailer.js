const { SMTP_URL } = process.env;
const nodeemailer = require('nodemailer');
const defaultEmailData = {from: 'EvilReddit@gmail.com'};
const sendEmail = (emailData, smtpURL = SMTP_URL) => {
    const completeEmailData = Object.assign(defaultEmailData, emailData);
    const transporter = nodeemailer.createTransport(SMTP_URL);
    return transporter
    .sendMail(completeEmailData)
    .then(info => console.log(`Message sent: $info.response`))
    .catch(err => console.log(`Problem sending email: $err`));
}
module.exports = {sendEmail};