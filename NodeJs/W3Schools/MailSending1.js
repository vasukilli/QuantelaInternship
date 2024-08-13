const nodeMailer = require("nodemailer");
const transporter = nodeMailer.createTransport({
      service : "gmail",
      auth : {
        user : "killivasudevarao33@gmail.com",
        pass : "V6301725926",
      }
});
const mailOptions = {
    from : "killivasudevarao33@gmail.com",
    to : "vasudevaraokilli123@gmail.com",
    subject : "Mail Sending by node js",
    text : "This was very easy!"
};

transporter.sendMail(mailOptions,(err,info) =>{
    if(err){
        console.log(err);
    }else{
        console.log("Email send :" + info.response);
    }
})