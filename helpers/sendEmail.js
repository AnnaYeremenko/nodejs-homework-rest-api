const nodemailer = require("nodemailer");

require("dotenv").config();

const{META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "a.yeremenko@meta.ua",
        pass: META_PASSWORD,
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async data => {
    try {
        const email = { ...data, from: "a.yeremenko@meta.ua"};
        await transport.sendMail(email);
        return true;
    } catch (error) {
        throw error;
    }
};

module.exports = sendEmail;
// const email = {
//     to: "vika@gmail.com", 
//     from: "a.yeremenko@meta.ua",
//     subject: "Test email",
//     html: "<p><strong>Test email</strong>from localhost:3000<p>"
// };

// transport.sendMail(email)
// .then(()=> console.log("Email send success"))
// .catch(error => console.log(error.message));