const express = require('express')
const expenseRouter = express.Router()
const Expense = require('../models/expense.js')


// Gets all the expenses from a single bank account
expenseRouter.get('/bank/:_id', (req, res, next) => {
    Expense.find({account: req.params._id}, (err, expenses) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(expenses)
    })
})
// Get a single expense from single bank account 
expenseRouter.get('/bank/:_id', (req, res, next) => {
    Expense.findOne({ _id: req.params._id }, (err, expense) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!expense){
            res.status(404)
            return next(new Error("Expense not found"))
        }
        return res.send(expense)
    })
})

// post a single expense to a single bank account
expenseRouter.post('/bank/:_id', (req, res, next) => {
    req.body.account = req.params._id
    req.body.user = req.user._id

    const newExpense = new Expense(req.body)

    newExpense.save((err, newExpense) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(newExpense)
    })
})

// update a single expense in a single bank account
expenseRouter.put('/bank/:_id', (req, res, next) => {
    Expense.findByIdAndUpdate({ _id: req.params._id, user: req.user._id }, req.body, { new: true }, (err, expense ) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(expense)
    })
})

// delete a single expense
expenseRouter.delete('/bank/:_id', (req, res, next) => {
    Expense.findByIdAndDelete({ _id: req.params._id }, (err, expense) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(expense)
    })
})

module.exports = expenseRouter