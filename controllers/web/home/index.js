// Importing the event service module
const event_service = require("../../../services/event");

// Defining the home controller object
const home_controller = {
    // Method to render the home page
    index: async (req, res) => {
        // Render the "home" view
        res.render("home");
    },
    // Method to render the add event page
    add: async (req, res) => {
        // Render the "home/add_update" view with mode set to "Add"
        res.render("home/add_update", { mode: "Add" });
    },
    // Method to render the update event page
    update: async (req, res) => {
        // Retrieve event data by its ID asynchronously
        const eventData = await event_service.getById(req.params.id);
        
        // Check if event data exists
        if (eventData) {
            // If event data exists, render the "home/add_update" view with mode set to "Update" and eventData
            res.render("home/add_update", { mode: "Update", eventData: eventData });
        } else {
            // If event data does not exist, send a 404 status code with a message indicating that the event was not found
            res.status(404).send("Event not found");
        }
    }
};

// Exporting the home controller object
module.exports = home_controller;
