const mongoose = require('mongoose');
const { any } = require('webidl-conversions');

const ProductManagerSchema = new mongoose.Schema({
    
    title : {
        type: String,
        required : [true, "Title is required"],
        minlength: [10, "Title must be at least 3 chracters long"]
    },
    price : {
        type: Number, 
        required : [true, "Price is required"]
    },
    description : {
        type: String,
        required : [true, "Description is required"],
        minlength: [10, "Description must be at least 10 chracters long"]
    },
}, {timestamps: true});

const Product = mongoose.model('product', ProductManagerSchema);

module.exports = Product;