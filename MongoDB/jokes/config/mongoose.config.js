const mongoose = require('mongoose'); //import mongoose
mongoose.connect('mongodb://localhost/jokes_db', { //creating db name and connecting project to that db
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database')) //confirm connection
    .catch(err => console.log('Something went wrong when connecting to the database ', err)); //lets you know if cant connect 