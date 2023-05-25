let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
})

let userModel = new mongoose.model('user', userSchema)



module.exports = userModel;