const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    payee: {
        type: String
    },
    catagory: {
        type: String
    },
    details: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: "Bank",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('Expense', expenseSchema)