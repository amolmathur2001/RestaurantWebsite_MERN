const express = require('express');
const router = express.Router();
const Orders = require('../Models/Orders');

router.post('/myorder',async (req,res) =>{
    try{
        let myData = await Orders.findOne({'email' : req.body.email});
        if(myData === null){
            res.json({orderData : []})
        }else{
            res.json({orderData : myData.order_data});
        }
          
    }catch(error){
        res.send("Server Error",error.message);
    }

});

module.exports = router;