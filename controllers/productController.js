const { Product  } = require("../models");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getProduct,
};