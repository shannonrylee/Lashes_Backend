const { model } = require("mongoose");
const ProductSchema = require("./product");
const ReviewSchema = require("./review");
const UserSchema = require("./user")

const Product = model("Product", ProductSchema);
const Review  = model("Review", ReviewSchema);
const User = model("User", UserSchema)

module.exports = {
  Product,
  Review,
  User
};
