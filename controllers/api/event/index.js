// getting the service functions
const event_service = require("../../../services/event")

//implementing new functions with those functions
const event_controller = {
    getAll(req,res) {
        //giving a json response
        res.json(event_service.getAll())
    },
    create(req,res) {
        //status code for creating, giving a json response
        res.status(201).json(
            event_service.create(req,res)
        )
    },
    update(req,res) {
        //generating an updated event
        const event = event_service.update(req.params.id, req.body)
        //checking if it not null
        if (event)
        {
            //giving a json response
            res.json(event)
        }
        else {
            //status code for not found and a message
            res.status(404).send("Could not find the event!!!")
        }
    },
    delete(req,res) {
        //getting the event by its id
        const event = event_service.getById(req.params.id)
        //if it exists
        if (event)
        {
            //deleting it based on its id
            event_service.delete(req.params.id)
            //sending status code for no content and a message
            res.status(204).send("The event is deleted!!!")
        }
        else {
            //sending a not found code and a message
            res.status(404).send("Could not find the event")
        }
    }
}

module.exports = event_controller