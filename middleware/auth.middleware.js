
require('dotenv').config()


const JWT_SECRET_KEY = process.env.SCRETE_KEY
let jwt = require('jsonwebtoken')

let getlogedinuser = async (req, res, next) => {
    try {
        let header = req.get('Authorization')

        if (!header) {
            return res.status(400).send('Not a logged in user')
        }
        header = header.split(' ')

        try {
            let user = jwt.verify(header[1], JWT_SECRET_KEY)
            req.logedinuser = user;
            next()
            return;

        } catch (error) {
            return res.status(400).send('Invalid Token')
        }


    } catch (error) {
        console.log(error)
        return res.status(401).send('Not a logged in user')
    }
}
module.exports = getlogedinuser