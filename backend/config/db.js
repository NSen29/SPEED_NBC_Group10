const mongoose = require('mongoose');

const connString = " "

const connectDB = async() => {
    try {
        await mongoose.connect(connString, {
            useCreateIndex = true,
            useFindAndModify = false,
            useUnifiedTopology: true,
            useNewURLParser: true,
        });
        console.log('Mongodb connection SUCCESS');
    } catch (error) {
        console.log('Mongodb connection FAIL ');
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB;