const Product = require("../model/productModel");
// const Errorhandling = require("../util/errorhandling");
const ApiFeatures = require("../util/apifeature");
const asynchandller = require("express-async-handler");

const ProductRegistration = asynchandller(async (req, res) => {
  const product = await Product.create(req.body);

  if (product) {
    res.status(200).send({
      success: true,
      product,
    });
  } else {
    res.status(400).send({
      success: false,
      message: "Product could not get Registered",
    });
  }
});
const GetProduct = asynchandller(async (req, res, next) => {
  const getproduct = await Product.find({});

  if (getproduct) {
    res.status(201).send(getproduct);
  } else {
    res.status(400).send({
      success: false,
      message: "Product not found",
    });
  }
});
//update Prodcut --Admin

const updateproduct = asynchandller(async (req, res) => {
  const prodcutorderid = req.params.id;

  const checkproductid = await Product.findById(prodcutorderid);

  if (!checkproductid) {
    res.status(400).send("Id not found !");
  }

  const updateproduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  if (updateproduct) {
    res.status(200).send({
      success: true,
      updateproduct,
    });
  } else {
    res.status(401);
    throw new Error("Error while updating the prodcut");
  }
});
// ---Delete Product
const DeleteProdcut = asynchandller(async (req, res, next) => {
  // find the id
  const findid = await Product.findById(req.params.id);

  //    console.log(req.params.id)

  if (!findid) {
    res.status(400).send({
      success: false,
      message: "Product not  found",
    });
  }

  const deleteprodut = await Product.findByIdAndDelete({ _id: req.params.id });

  if (deleteprodut) {
    res.status(200).send({
      success: true,
      message: "Prodcut deleted !",
    });
  } else {
    res.status(401);
    throw new Error("Error occur while deleting the data");
  }
});

const Getproductbyid = asynchandller(async (req, res, next) => {
  const getproductbyid = await Product.findById(req.params.id);

  if (getproductbyid) {
    res.status(200).send({
      success: true,
      getproductbyid,
    });
  } else {
    return next(new Errorhandling("Error while fetching the data", 404));
  }
});

const SerachProduct = asynchandller(async (req, res) => {
  const apiFeatures = new ApiFeatures(Product.find(), req.query).search();
  const product = await apiFeatures.query;

  res.status(200).json({
    message: "sucess",
    No_of_Prodcut: JSON.stringify(product.length),
    product,
  });
});

// THis method working Fine

const tryserach = asynchandller(async (req, res) => {
  const Searchuser = req.query.keyword
    ? {
        $or: [{ productname: { $regex: req.query.keyword, $options: "i" } }],
      }
    : {};

  const userserch = await Product.find(Searchuser);

  if (userserch) {
    res.status(201).send({
      message: "Success",
      Number_Product: JSON.stringify(userserch.length),
      userserch,
    });
  } else {
    res.status(400);
    throw new Error("Could find the prodcut");
  }
});
module.exports = {
  ProductRegistration,
  GetProduct,
  updateproduct,
  DeleteProdcut,
  Getproductbyid,
  SerachProduct, //  working Properly,
  tryserach,
};
