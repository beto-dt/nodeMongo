const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CustomerModel = mongoose.model('Customer');


router.get('/add', (req, res) =>{
     res.render('add-customer');
});

router.post('/add',(req, res)=>{
    var customer = new CustomerModel();
    customer.customerName = req.body.customerName;
    customer.customerId = Math.ceil(Math.random() *1000000000) + "";
    customer.save((err, doc) => {
        if(!err){
/*              res.redirect('/customer/list'); */
               res.json({ message: "successfull", status :"ok"})
        }
        else
        {
            res.send('Error');
        }
    });
    res.render('add-customer')
});

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