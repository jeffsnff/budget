
const express = require('express')
const expressJwt = require('express-jwt')
const app = express()
require('dotenv').config()
const PORT = 7000
const morgan = require('morgan')
const mongoose = require('mongoose')

// middleware for every request
app.use(express.json())
app.use(morgan('dev')) // gives updates while using CRUD

// DB collection
mongoose.connect('mongodb://localhost:27017/budget', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => console.log('Connected to Budget DB'))

// routes
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({secret: process.env.SECRET})) // requires user.req here on out

app.use('/api/budget', require('./routes/bankAcctRouter'))
app.use('/api/expense', require('./routes/expenseRouter'))

// Global Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})
app.listen(PORT, () => {
    console.log(`Server running on Port : ${PORT}`)
})