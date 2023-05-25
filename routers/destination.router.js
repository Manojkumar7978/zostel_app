const express = require('express')
let destination = express.Router()
const getlogedinuser = require('../middleware/auth.middleware')
const destinationModel = require('../db/models/destination.model')


destination.get('/destination', async (req, res) => {
    try {
        let data = await destinationModel.find()
        res.send(data)

    } catch (error) {
        res.status(400).send('something went wrong')
    }
})
destination.get('/destination/:id', async (req, res) => {
    try {
        let id = req.params.id
        let data;
        try {
            data = await destinationModel.findById(id)
        } catch (error) {
            data = await destinationModel.findOne({ place: id })
        }
        res.send(data)

    } catch (error) {
        res.status(400).send('something went wrong')
    }
})



module.exports = destination