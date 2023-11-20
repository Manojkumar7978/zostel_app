let mongoose = require('mongoose');
require('dotenv').config()
async function main() {
    // console.log(process.env.MONGO_URL)

    await mongoose.connect(process.env.MONGO_URL);
    console.log('mongodb started')

}


module.exports = main;




