const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 5000
require('dotenv').config()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//user authentication

const userRoute = require('./user/userRoute');
app.use('/api/user/', userRoute)

mongoose.connect(process.env.DB_STRING, (req, res) => {
  console.log('db connect')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})