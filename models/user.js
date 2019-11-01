const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    }
})

//pre-saved hook to encrypt users' passwords
userSchema.pre("save", function(next){
    const user = this // refers to what the .save is being called on (newUser)
    if (!user.isModified("password")) return next() // mongoose checker that checks if the password has been encrypted. If it has not been encrypoted it will continue with the process.
    bcrypt.hash(user.password, 10, (err, hash) => { //what is being encrypted, how many times (salt rounds) and the response (error or the encrypted password)
        if(err) return next(err)
        user.password = hash
        next()
    })
})

// user method to check the hashed password on logan
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        callback(null, isMatch)
    })
}

// method to remove user password after successful login / signup
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model('User', userSchema)