var express = require("express");
var app = express();
const nodemailer = require("nodemailer");


const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



app.post("/codeready_send_mail",  (req, res) => {
    var userData = {       
        Name: req.body.inputName4,
        email: req.body.inputEmail4,
        phone:  req.body.inputPhone4,
        subject: req.body.inputSubject4,
        message: req.body.inputMessage4
    }
    console.log("userData",userData)
   
    let transporter = nodemailer.createTransport(
        {
            service: "gmail",
            secure: false, 
            auth: {
                user: "bulbul.infograins@gmail.com", 
                pass: "BulBul@123" 
               
            },
            tls: { rejectUnauthorized: false }
        }
    );
    
    let mailOptions = {
        from: userData.email,
        to: "vipin.infograins@gmail.com", 
        // to: "bulbulbagwan918@gmail.com",
        subject: userData.subject, 
        html: "Name -"+ userData.Name+"<br>"+"Email - "+userData.email+"<br>"+ "Phone Number - "+userData.phone + "<br>"+ "Message - " +userData.message 
    };
    
    transporter.sendMail(mailOptions, function (error, success) {
        if (error) {
            res.send(error);
            console.log(error);
        }
        else {
            console.log("Server is ready to take our messages");
            return res.redirect("http://3.110.16.6/");
            // return res.redirect("/index.html")
        }
    });
    });

app.listen(5000, () => console.log('server is listening 5000....'));