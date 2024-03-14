//importing functions and modules
const express = require("express");
const { validationResult } = require("express-validator");
const { addEventValidation, deleteEventValidation, updateEventValidation } = require("../../../validators/event");

//creating a router instance, getting event controller
const router = express.Router();
const event_controller = require("../../../controllers/api/event");

//Defining api routes
//giving all the events
router.get("/", (req,res)=>{
    event_controller.getAll(req,res);
});
//adding a new event
router.post("/", addEventValidation(), (req,res)=>{
    const errors = validationResult(req);
    //in case of errors
    if (!errors.isEmpty())
    {
        return res.status(400).json({ error: req.errorMessages.msg });
    }
    event_controller.create(req,res)
})

//updating an event
router.put("/:id", updateEventValidation(), (req,res)=>{
    const errors = validationResult(req);
    //in case of errors
    if (!errors.isEmpty())
    {
        return res.status(400).json({ error: req.errorMessages.msg });
    }
    event_controller.update(req,res)
})
//deleting an event
router.delete("/:id", deleteEventValidation(), (req,res) =>{
    const errors = validationResult(req);
    //in case of errors
  if (!errors.isEmpty()) {
        return res.status(400).json({ error: req.errorMessages.msg });
  }
  event_controller.delete(req,res)
})

//exporting the router
module.exports = router;