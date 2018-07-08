//This is the entry point of our app named app.js ;)
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
 const app = express();


 const product = require('./routes/chat.routes'); // Imports routes for the products
//const app = express();

// Set up mongoose connection

let dev_db_url = 'mongodb://Malik:malik123@ds129801.mlab.com:29801/chatapp';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/chatapp', product);

let port = 3000;
app.listen(port, ()=> {
    console.log('Server is up on ' + port);
});

