const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/',(req, res)=>{
     res.send('Customer Controller');
});

module.exports = router;