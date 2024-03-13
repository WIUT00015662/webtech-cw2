// Importing the required module and the home router module
const express = require('express')
const home_router = require('./home')

// Creating an instance of Express router
const router = express.Router()

// Registering the child router (home_router) under the root path ('/')
router.use('/', home_router)

// Exporting the router to make it available to other parts of the application
module.exports = router

