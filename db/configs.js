let mongoose = require('mongoose');
require('dotenv').config()
async function main() {
    // console.log(process.env.MONGO_URL)

    await mongoose.connect("mongodb+srv://manojkumarpadhyms:manoj123@cluster0.x0q2opq.mongodb.net/zostel_app?retryWrites=true&w=majority");
    console.log('mongodb started')

}


module.exports = main;




