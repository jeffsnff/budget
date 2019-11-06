
const express = require('express')
const expressJwt = require('express-jwt')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 7000
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require("path") // used for deploying to heroku


// middleware for every request
app.use(express.json())
app.use(morgan('dev')) // gives updates while using CRUD
app.use(express.static(path.join(__dirname, "client", "build"))) // used for deplying to heroku


// DB collection MONGODB_URL is to connect to mongoLab for Heroku deployment
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/budget',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    }, 
    () => console.log('Connected to Budget DB')
)

// routes
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({secret: process.env.SECRET})) // requires user.req here on out
// they must be logged in to access these routes
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

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
}); // used for deploying to heroku

app.listen(PORT, () => {
    console.log(`Server running on Port : ${PORT}`)
})