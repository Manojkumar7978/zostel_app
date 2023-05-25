let mongoose = require('mongoose')

let destinationSchema = new mongoose.Schema({
    place: String,
    img1: String,
    img2: String,
    about: String,
    love: String,
    fun: String,
    hotels: [],
})

let destinationModel = new mongoose.model('destination', destinationSchema)

module.exports = destinationModel;