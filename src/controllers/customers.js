const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CustomerModel = mongoose.model('Customer');

router.get('/list',(req, res)=>{
    //Setting
/*      var customer = new CustomerModel();
    customer.customerName ='Tito';
    customer.customerId ='3',
    customer.save();  */

    //Getting
    CustomerModel.find((err,docs)=>{
        if(!err)
        {  
            console.log(docs);
           
            res.render('list',{ data : docs});
        }
        else
        {
            res.send("Error");
        }
    });
});

module.exports = router;