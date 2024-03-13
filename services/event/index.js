//importing a library
const fs = require("fs")

//accessing the json database
const events = require(global.events_db)

//creating functions
const event_service = {
    //returning all the events
    getAll() {
        return events
    },
    //returning the event given its id
    getById(id) {
        return events.find(t => t.id == id)
    },
    //creating a new event
    create(req,res) {
        //creating a new id randomly
        let new_id = genRanId(5)

        //getting the event info
        const event = req.body
        //creating the event
        const new_event = {
            id: new_id,
            event: event
        }
        //added to the array
        events.push(new_event)
        //written to the database
        writeToFile(events)
        //returning the new event
        return new_event
    },
    //updating the event
    update(id, updateData){
        //getting the event id
        const event_id = events.findIndex(t => t.id == id)
        //if the id cannot be found, return null
        if (event_id === -1)
        {
            return null
        }
        //changing the event based on the id, first write the old info, then the new one provided by the user, overlapping data will be changed to the new info
        events[event_id].event = { ...events[event_id].ticket, ...updateData }
        //writing to the database
        writeToFile(events)
        //returning the event
        return events[event_id]
    },
    //deleting the event
    delete(id) {
        //finding the id
        const index = events.findIndex(t => t.id == id)
        //slicing once to delete that specific event
        events.splice(index,1)
        //writing to the file
        writeToFile(events)
    }
}
// async function for writing to the database
let writeToFile = async (users) => {
    // writes to the database the input with four spaces with utf8 convention
    fs.writeFileSync(
        global.events_db,
        JSON.stringify(
            users,null, 4
        ),
        "utf8"
    )
}

//we generate a random id here
let genRanId = (count) => {
    //create an empty string 
    let result = ""
    //string of all possible characters
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    //getting the length of all those characters
    const charactersLength = characters.length
    //based on the number of characters for the id, do the loop
    for (let i = 0; i < count; i++)
    {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}
//exporting the functinons
module.exports = event_service