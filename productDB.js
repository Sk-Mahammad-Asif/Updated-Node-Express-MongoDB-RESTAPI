//parsing data from local machine to mongodb for updating.
require("dotenv").config();
const connectDB = require("./db/connect"); // setup connection.
const Product = require("./models/product");//import models schema.
const ProductJson = require("./products.json");//import data

const start = async () => {
     try {
        await connectDB(process.env.MONGODB_URL);//connect to mongodb
        await Product.deleteMany();//if any update first delete previous schema and update latest schema.
        await Product.create(ProductJson);//pass the data
        console.log("success");
     }catch (error){
        console.log(error);
     }
};

start();