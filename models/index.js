const { model } = require("mongoose");
const ProductSchema = require("./product");
const OrderSchema = require("./order");
const UserSchema = require('./user')

const Product = model("Product", ProductSchema);
const Order = model("Order", OrderSchema);
const User = model("User", UserSchema)
module.exports = {
  Product,
  Order,
  User
};