const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const config = require('../config/auth')

require('dotenv').config()

const app = express()

// Import routes

// Middlewares
app.use(morgan('dev'))
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Use routes

// Listen port
app.set('port', config.port || 4001)

app.listen(app.get('port'), () => {
  console.log('server on port http://localhost:' + app.get('port'))
})
