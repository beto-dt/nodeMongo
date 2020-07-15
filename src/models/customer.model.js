const mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    customerName : {
        type : String,
        required : "Required"
    },
    customerId : {
        type: String
    },
    customerLike:{
        type:String
    }
});
mongoose.model("Customer",CustomerSchema);