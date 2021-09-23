require('dotenv').config();

const express = require('express');

const app = express()

const PORT = process.env.PORT || 3000;

const connection_url = 'mongodb+srv://Chris:groupten@cluster0.3e6jh.mongodb.net/SPEED database?retryWrites=true&w=majority'
app.listen(PORT, console.log("Server running on port ${3000}"));