const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CustomerModel = mongoose.model('Customer');

router.get('/list',(req, res)=>{
    //Setting
    var customer = new CustomerModel();
    customer.CustomerName ='Tito';
    customer.CustomerId ='2',
    customer.save();

    //Getting
    CustomerModel.find((err,docs)=>{
        if(!err)
        {  
            console.log(docs);
            res.send('Customer Controller');
        }
        else
        {
            res.send("Error");
        }
    });

     
});

module.exports = router;