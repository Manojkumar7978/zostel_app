const express = require('express')
let bookingHistoryRouter = express.Router()
const getlogedinuser = require('../middleware/auth.middleware')
const bookingModel = require('../db/models/bookingHistory.model')



bookingHistoryRouter.get('/bookinghistory', getlogedinuser, async (req, res) => {
    try {
        let userid = req.logedinuser._id
        let data = await bookingModel.find({ userid: userid })
        res.send(data)

    } catch (error) {
        res.status(400).send(error)
    }
})

bookingHistoryRouter.post('/bookinghistory', getlogedinuser, async (req, res) => {
    try {
        let userid = req.logedinuser._id
        let data = req.body
        data = await bookingModel.create({
            ...data,
            userid
        })
        res.send('Booking Sucessfull')

    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = bookingHistoryRouter