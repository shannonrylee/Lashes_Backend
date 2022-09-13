const { Product, User } = require("../models");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getProductById = async (req, res) => {
    try {
     const productId = await Product.findById(req.params.id)
     return res.status(200).json(productId)
    } catch (error) {
      return res.status(500).send(error.message)
    }
}
const createProduct = async (req, res) => {
    try {
      const newProduct = await new Product(req.body);
      await newProduct.save();
      return res.status(201).json({
        newProduct,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  const updateProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Product.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("Product deleted");
      }
      throw new Error("Product not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  const getUser = async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const createUser = async (req, res) => {
    try {
      const newUser = await new User(req.body);
      await newUser.save();
      return res.status(201).json({
        newUser,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  const updateUser = async (req, res) => {
    try {
      const user= await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await User.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("User deleted");
      }
      throw new Error("User not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  

module.exports = {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};