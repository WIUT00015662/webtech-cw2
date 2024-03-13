// Importing the required modules
const express = require('express');
// Creating an instance of Express router
const router = express.Router();
// Importing the home controller module
const home_controller = require('../../../controllers/web/home');

// Defining routes and associating them with corresponding controller methods

// Route for the home page
router.get('/', home_controller.index);

// Route for displaying the form to add a new item
router.get('/add', home_controller.add);

// Route for displaying the form to update an item (general update page)
router.get('/update', home_controller.update);

// Route for displaying the form to update a specific item by ID
router.get('/update/:id', home_controller.update);

// Exporting the router to make it available to other parts of the application
module.exports = router;
