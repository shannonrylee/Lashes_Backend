const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
    {
        name: { type: String, required: true },
        product: { type: String, required: true },
        price: {type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = Order;