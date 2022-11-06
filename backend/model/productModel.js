const mongoose = require("mongoose");

const productmodel = mongoose.Schema({
  productname: {
    type: String,
    required: [true, "Please Enter the Product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter the product description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the Price of Product"],
    maxlength: [8, "Price cannot exceed then 8 char"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  // to fethc image we need to mention public Id and stinf
  images: [
    {
      public_id: {
        type: Number,
        required: true,
        default: 001,
      },
      url: {
        type: String,
        required: true,
        default:
          "https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png",
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter the category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please enter the nunber of stocks avilabe"],
    maxlength: [4, "Stock can be exceeded then 4"],
  },
  numofReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: {
          type: String,
          required: false,
        },
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productmodel);

module.exports = Product;
