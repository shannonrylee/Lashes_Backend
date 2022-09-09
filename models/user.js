const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: {type: String, required: true },
        address: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = User;