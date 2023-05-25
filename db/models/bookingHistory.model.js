let mongoose = require('mongoose')

let bookingHistory = new mongoose.Schema({
    userid: String,
    destinationid: String,
    hotelid: Number,
    bookingDetails: [],
    checkin: Date,
    checkout: Date,
    currency: String,
    totalnight: Number
}, {
    timestamps: true
})

let bookingModel = new mongoose.model('booking', bookingHistory)

module.exports = bookingModel;