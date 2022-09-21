const express = require("express")//import express 
const cors = require('cors') // import cors
const app = express()
app.use(cors()) //enable cors
const port = 8000 //name the port
require("./config/mongoose.config.js") //connect db from mongoose.config.js


app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./routes/product.route')(app);

app.listen(port, () => 
console.log(`Listening on port: 8000`)
); //confirms connections on terminal