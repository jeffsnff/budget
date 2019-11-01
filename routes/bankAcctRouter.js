const express = require('express')
const bankAcctRouter = express.Router()
const Bank = require('../models/bankAccount.js') // this is the model the post will be using

// this is used to CRUD the bank accounts

//Get All Bank accounts
bankAcctRouter.get('/user', (req, res, next) => {
    Bank.find({ user: req.user._id }, (err, banks) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(banks)
    })
})
// Get a single Bank Account
bankAcctRouter.get('/:_id', (req, res, next) => {
    Bank.findOne({_id: req.params._id, user: req.user._id}, (err, bank) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!bank){
            res.status(404)
            return next(new Error("Bank Account Not Found"))
        }
        return res.send(bank)
    })
})
// Post a single bank account
bankAcctRouter.post('/', (req, res, next) => {
    // attaches the user id to the body of the account which validates the request
    req.body.user = req.user._id

    const newBankAcct = new Bank(req.body)

    newBankAcct.save((err, newBankAcct) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newBankAcct)
    })
})

// Update a single bank account
bankAcctRouter.put('/:_id', (req, res, next) => {

    Bank.findByIdAndUpdate({_id: req.params._id, user: req.user._id}, req.body, {new: true}, (err, bank) => {
        // change to findOneAndUpdate
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(bank)
        }
    )
})

// Delete a single bank account
bankAcctRouter.delete('/:_id', (req, res, next) => {
    Bank.findOneAndDelete(
        {_id: req.params._id},
        (err, bank) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bank)
        }
    )
})

module.exports = bankAcctRouter