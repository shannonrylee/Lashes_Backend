const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: {type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = Product;