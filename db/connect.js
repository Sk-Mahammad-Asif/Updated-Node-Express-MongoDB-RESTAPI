const mongoose = require("mongoose");


//const uri = "mongodb+srv://Asif:CBPzxeokV6KB8dvr@asifapi.l3a9ieo.mongodb.net/AsifAPI?retryWrites=true&w=majority";

//recive argument uri(same like props) from app.js file 
const connectDB = (uri) => {
    console.log("connect db hello!!!!!!!!!!!!!");
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

}

module.exports = connectDB;