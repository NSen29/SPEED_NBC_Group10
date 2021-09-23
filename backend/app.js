const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const Claims = require('./routes/api/Claims');

const app = express();

// Connect to Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/Claims', Claims);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));