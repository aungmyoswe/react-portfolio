var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");


var contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:'aungmyoswe.dev@gmail.com',
        pass: 'qtzblxhoxvjdkuck',
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready to Send")
    }
})

router.get("/", function(req, res, next) {
    console.log("hello");
})
router.post("/", function(req, res, next) {
    console.log(req.body)
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const textarea = req.body.textarea;
    const position = req.body.position;
    const phone = req.body.phone;
    const mail = {
        from: 'aungmyoswe.dev@gmail.com',
        to: email,
        subject: subject,
        html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Description:${textarea}</p>
        <p>Position: ${position}</p>
        <p>Phone: ${phone}</p>
        `
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.log(error)
            res.json({ status: "Error" })
        } else {
            res.json({ status: "success" })
        }
    })
});

module.exports = router;