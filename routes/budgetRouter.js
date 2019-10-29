const express = require('express')
const budgetRouter = express.Router()
const Expense = require('../models/expense.js')

//Get All Request
budgetRouter.get('/', (req, res, next) => {
    Expense.find((err, expenses) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(expenses)
    })
})

// Delete
budgetRouter.delete('/:_id', (req, res, next) => {
    Expense.findOneAndDelete(
        {_id: req.body._id},
        (err, expense) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(expense)
        }
    )
})