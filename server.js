const express = require('express')
const axios = require('axios')
const cors = require('cors')
const main = require('./db/configs')
const router = require('./routers/signup.router')
let destinationRouter = require('./routers/destination.router')
const bookingHistoryRouter = require('./routers/bookingHistory.router')
require('dotenv').config()



let app = express()
app.use(cors())
app.use(express.json())

app.use('/', router)
app.use('/', destinationRouter)
app.use('/', bookingHistoryRouter)



app.listen(8080, () => {
    main();
    console.log('app listen to port 8080')
})