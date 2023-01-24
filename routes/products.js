const express = require("express");
const router = express.Router();
const {getAllProducts, getAllProductsTesting,} = require("../controllers/products");

//define routes
//for fethcing data home page
router.route("/").get(getAllProducts);

//for testing purpose use POSTMAN API Testing.
router.route("/testing").get(getAllProductsTesting);

module.exports = router;