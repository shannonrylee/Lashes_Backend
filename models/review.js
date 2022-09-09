const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
    {
        name: { type: String, required: true },
        textarea: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = Review;