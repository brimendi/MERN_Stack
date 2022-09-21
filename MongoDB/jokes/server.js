const express = require("express") //import express 
const app = express()
const port = 8000 //name the port
require("./config/mongoose.config.js") //connect db from mongoose.config.js


app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./routes/jokes.routes')(app); //linking routes to server 

app.listen(port, () =>  
console.log(`Listening on port: 8000`)
); //confirms connection on terminal