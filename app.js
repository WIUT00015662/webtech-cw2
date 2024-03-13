// creating an instance of express
const express = require("express")

//creating an instance of body parser
const body_parser = require("body-parser")


//creating an instance of path
const path = require("path")

//making the json database globally available
global.events_db = path.join(__dirname, "./data/events_db.json");

//importing modules 
const web_route = require("./routes/web")
const api_route = require("./routes/api");

const app = express()

//telling to use pug
app.set("view engine", "pug");

//defining paths and what to use
app.use("/css", express.static("public/css"))
app.use("/js", express.static("public/js"))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//setting the api route
app.use("/api", api_route);

//setting the web route
app.use("/", web_route);

//if any other route is requested, users are redirected
app.use((req,res) =>{
    res.redirect("/");
});

//creating the port
const port = 3000;

//creating the web app

app.listen(port, () => console.log(`The server is running on port ${port}`));


