const express = require('express')
const userModel = require('../db/models/users.model')
let router = express.Router()
let jwt = require('jsonwebtoken')
const getlogedinuser = require('../middleware/auth.middleware')
const bcrypt = require('bcrypt');
require('dotenv').config()
console.log(process.env.SCRETE_KEY)
let JWT_SCRETE_KEY = "sdufhasdfhaskfhsahfksahfksahdf"


router.post('/signup', async (req, res) => {
    try {
        let data = req.body
        let x = await userModel.find({ Email: data.email })
        if (x.length >= 1) {
            res.status(500).send('user alredy registerd with us')
            return;
        }
        let user = bcrypt.genSalt(5, function (err, salt) {
            bcrypt.hash(data.password, salt, async function (err, hash) {
                // Store hash in your password DB.
                let user = await userModel.create({
                    Name: data.name,
                    Email: data.email,
                    Password: hash
                })
                user = user.toJSON()
                delete user.Password
                res.send(user)
            });
        });
    } catch (error) {
        res.status(400).send('Smething Went Wrong')
    }
})

router.post('/login', async (req, res) => {
    try {
        let body = req.body
        console.log(body)
        let data = await userModel.findOne({ Email: body.email })
        if (data.length == 0) {
            res.status(500).send('user not registered with us')
            return;
        }
        bcrypt.compare(body.password, data.Password, function (err, result) {
            if (err) {
                res.status(500).send('Invalid data')
                return;
            } else {
                data = data.toJSON()
                delete data.Password
                let key = jwt.sign(data, JWT_SCRETE_KEY)
                res.send({ data, key })
            }
        });

    } catch (error) {
        res.status(400).send('something went wrong')
    }
})

router.get('/userDetails', getlogedinuser, async (req, res) => {
    try {

        let user = req.logedinuser
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.patch('/password', async (req, res) => {
    try {
        let data = req.body
        let user = await userModel.find({ Email: email })
        bcrypt.compare(data.oldpassword, user.Password, async function (err, result) {
            if (err) {
                res.send('Please enter correct older password.')
                return;
            } else {
                let x = await userModel.findByIdAndUpdate(user._id, {
                    Password: data.newpassword
                })
                res.send('Password resent Sucessfully')
            }
        });

    } catch (error) {
        res.status(400).send('something went wrong')
    }
})



module.exports = router