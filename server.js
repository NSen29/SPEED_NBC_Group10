const express = require('express')
const server = express()
const dotenv = require('dotenv')
const { connectDB } = require('./config/db')
const products = require('./routes/api/Claims')

dotenv.config()

connectDB();

const app = express()

server.get('/', (req, res) => {
  res.send('API is running.........')
})
server.get('/api/claims', (req, res) => {
  res.json(products)
})


const PORT = process.env.PORT || 5000
server.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} port ${PORT}`)
)