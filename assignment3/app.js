const path = require('path')

const express = require('express')

const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/users')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', userRoutes)
app.use('/', indexRoutes)

app.listen(8080)