var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'youser@gmail.com',
        pass:'userpass'
    }
});

var mailoption={
    from:'youser@gmail.com',
    to:'friend@gmail.com',
    subject:'Mail from NodeJS',
    text:'That was Easy!'
};

transporter.sendMail(mailoption,function(err,res){
    if (err) {
        console.log(err);
    }else{
        console.log('Mail Sent');
    }
    
});