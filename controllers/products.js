const Product = require("../models/product");

const getAllProducts = async(req, res) => {
   // res.status(200).json({msg : "Hello I am getting all products" });
   const {company, feautured, name, sort, select} = req.query;
   const queryObject = {};

   //company name filtering.
   if(company){
    queryObject.company = company;
   }

   //filtering by data featuredname
   if(feautured){
    queryObject.feautured = feautured;
   }

   //filtering name by regex functionality
   if(name){
      queryObject.name = {$regex: name, $options: "i"};
   }


   let apiData = Product.find(queryObject);

   //sort
   if(sort){
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
   }

   //select
   if(select){
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
   }

   //pagination feature
   let page = Number(req.query.page) || 1;
   let limit = Number(req.query.limit) || 3;

   let skip = (page - 1) * limit;
   apiData = apiData.skip(skip).limit(limit);



   const Products = await apiData;
   res.status(200).json({Products, nbHits : Products.length });

};

const getAllProductsTesting = async(req, res) => {
    res.status(200).json({msg : "Hello I am getAllProductsTesting" });
};

module.exports = {getAllProducts, getAllProductsTesting};