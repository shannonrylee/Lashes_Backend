const { Review } = require("../models");

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

module.exports = {
  getReview,
  createReview,
  updateReview,
  deleteReview,
};