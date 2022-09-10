const { Product, User, Review } = require("../models");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getReview = async (req, res) => {
    try {
      const reviews = await Review.find();
      return res.status(200).json({ reviews });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const createReview = async (req, res) => {
    try {
      const newReview = await new Review(req.body);
      await newReview.save();
      return res.status(201).json({
        newReview,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  const updateReview = async (req, res) => {
    try {
      const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(review);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteReview = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Review.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("Review deleted");
      }
      throw new Error("Review not found");
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
  getReview,
  createReview,
  updateReview,
  deleteReview,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};