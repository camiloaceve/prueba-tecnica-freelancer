const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const config = require('../config/auth')

require('dotenv').config()

const app = express()

// Import routes
const router = require('./routes/index')

// Middlewares
app.use(morgan('dev'))
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Use routes
app.use('/api', router)

// Listen port
app.set('port', config.port || 4001)

app.listen(app.get('port'), () => {
  console.log('server on port http://localhost:' + app.get('port'))
})
