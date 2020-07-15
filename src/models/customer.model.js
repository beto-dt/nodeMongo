const mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    CustomerName : {
        type : String,
        required : "Required"
    },
    CustomerId : {
        type: String
    },
    CustomerLike:{
        type:String
    }
});

mongoose.model("Customer",CustomerSchema);