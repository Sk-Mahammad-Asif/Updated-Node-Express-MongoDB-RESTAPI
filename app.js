    
    //import .env files here
    require("dotenv").config();

    const express = require("express");
    const app = express();

    //setup MongoDB conections with this app.js file code is written as under "./db/connect" this folder.
    const connectDB = require("./db/connect");

    const PORT = process.env.PORT || 5000;

    const products_routes = require("./routes/products");

    app.get("/", (req, res) => {
        res.send("Hi, I am Live ");
    });

    app.use("/api/products", products_routes);

    const start = async() => {
        try{

            await connectDB(process.env.MONGODB_URL);
            app.listen(PORT, () => {
            console.log(`${PORT} Yes I am Connected`);
            });
        }catch(error){
            console.log(error);
            }
        };

    start();