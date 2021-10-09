const express = require('express');
const { connectDB } = require('./config/db')
//var cors = require('cors');
const app = express();


const path = require("path");
const Claims = require('./models/Claims');
app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "/frontend/build"));
});

// routes


// Connect Database
connectDB();

// cors
//app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/Claims', Claims);

const port = process.env.PORT || 8080;

//if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./frontend/build'));
//}


app.listen(port, () => console.log(`Server running on port ${port}`));