const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CustomerModel = mongoose.model('Customer');

router.post('/customer/add',(req, res)=>{
    var customer = new CustomerModel();
    customer.customerName = req.body.customerName;
    customer.customerId = Math.ceil(Math.random() *1000000000) + "";
    customer.save((err, doc) => {
        if(!err)
        {
             res.redirect('/customer/list'); 
        }
        else
        {
            res.send('Error');
        }
    });   
});

router.get('/list',(req, res)=>{
    res.render('list');
});

module.exports = router;