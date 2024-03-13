//importing modules and router
const express = require('express')
const event_router = require('./event')

//getting an instance of the router
const router = express.Router()

// registering child routers
router.use('/event', event_router)
//exporting the router
module.exports = router