//importing the functions and modules
const { body, param } = require("express-validator");
const event_service = require("../../services/event");

//creating a function for adding validation
const addEventValidation = () => {
    return [
        //checking stuff
        body("title")
        .notEmpty().withMessage("Event title cannot be empty")
        .isLength({ min: 8, max: 255}).withMessage("Event title must be between 8 and 255 characters"),
        body("description")
        .notEmpty().withMessage("Event description cannot be empty")
        .isLength({min: 8, max: 512}).withMessage("Event description should be between 8 and 512 characters"),
        body("date")
        .notEmpty().withMessage("Event date cannot be empty!")
        .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage("Invalid date formate. Use DD/MM/YYYY HH:mm format"),
        body("location")
        .notEmpty().withMessage("Event location cannot be empty")
        .isLength({min: 8, max: 512}).withMessage("Event location should be between 8 and 512 characters"),
        body("organizer")
        .notEmpty().withMessage("Event organizer cannot be empty")
        .isLength({ min: 3, max: 128}).withMessage("Event organizer must be between 8 and 128 characters"),
    ];
};
//function for validating the event deletion
const deleteEventValidation = () => {
    return [
      param('id').custom(async (id) => {
        const exists = await event_service.getById(id);
        //if the event does not exist with that id
        if (!exists) {
          throw new Error('Event not found');
        }
      })
    ];
};

const updateEventValidation = () => {
    return [
        //checking if an event with that id exists
        param('id').custom(async (id) => {
            const exists = await event_service.getById(id);
            if (!exists) {
              throw new Error('Event not found');
            }
        }),
        //checking input field values
        ...addEventValidation()
    ];
};

//exporting the functions
module.exports = {
    addEventValidation,
    deleteEventValidation,
    updateEventValidation
};