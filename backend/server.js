/*
require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express()

app.listen(PORT, console.log("Server running on port ${PORT}"));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
*/