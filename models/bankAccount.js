const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bankSchema = new Schema({
    bankName: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        enum: ["Checking", "Saving", "Credit Card", "Investment"],
        required: true
    },
    // accountBalance: {
    //     type: Number,
    //     required: true,
    //     default: 0
    // },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Bank", bankSchema)