// db.js

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try {
        await mongoose.connect(
            db, {
                useNewUrlParser: true
            }
        );

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

/*
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

*/