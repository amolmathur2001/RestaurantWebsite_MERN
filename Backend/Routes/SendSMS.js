const express = require('express');
const router = express.Router();
const client = require('twilio')(process.env.twilio_SID,process.env.twilio_Auth);

router.post('/sendMessage',(req,res) =>{
    const phone = req.body.phone;
    const name = req.body.name;
    client.messages.create({
        body : `Hello ${name},Your table at Barbeque City is Booked,Please reach 10min beofore the time`,
        from: process.env.twilio_phone,
        to : phone,
    }).then((messages) =>{
        res.status(200).json({msg : "Your Otp is send"});
    }).catch((err) =>{
        console.log(err.message);
        return res.json({error : err.message});
    })
    
});
module.exports = router