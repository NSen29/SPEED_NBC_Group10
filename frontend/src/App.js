import { AddBox, ArrowDownward } from "@material-ui/icons";


import { Table } from './Table';
/*

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${3000}`));
*/
function App() {

    return ( < div className = "App" >
        <
        h2 > < /h2> <Table / >
        <


        /div>


    );

}

export default App;