const mongoose = require('mongoose'); //import mongoose to use db

const JokesSchema = new mongoose.Schema({ //creating component and adding to schema 
    
    //requirements for adding to db
    setup : {
        type: String,
        required : [true, "Setup is required"], //validations
        minlength: [10, "Setup must be at least 10 chracters long"] 
    },
    punchLine : {
        type: String, 
        required : [true, "Punchline is required"], //validations
        min : [1, "Punchline must be at least 4 characters long"],
        max : [10, "Punchline must be less than 20 characters"]
    }
}, {timestamps: true}); //automatically adds created at and updated at fields to a document in db


//export the whole file as Joke model
const Joke = mongoose.model('joke', JokesSchema);

module.exports = Joke; 
