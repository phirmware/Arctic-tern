const express = require('express')
const bodyParser = require('body-parser')
var passport = require('passport')
const app = express()

const static = require('./static')
const staticRoutes = require('./static/routes')
const apiRoutes = require('./api')
const middleware = require('./api/middleware')
static(app, express)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());
app.use('/', staticRoutes)
app.use('/api', apiRoutes)

app.use(middleware.handleError)

module.exports = (port, cb) => app.listen(port, cb)
