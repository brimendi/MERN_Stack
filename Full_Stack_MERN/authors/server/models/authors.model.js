const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    
    name : {
        type: String,
        required : [true, "{PATH} is required"], //path = name, minlength
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters long"]
    }
}, {timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema); // {Author} in controllers