# webtech-cw2
Coursework 2 for Web Technologies module

# Event Management Web Application

## About the App
This web application allows users to create, edit, delete, and view events. Users can add event details such as title, description, date, location, and organizer.

## How to Run the App Locally
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the server by running `node app.js`.
5. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Application Dependencies
- Express
- Express-validator
- Pug
- Axios
- Body-parser
- Fs
- Nodemon
- Path

## Links
- [GitHub Repository] https://github.com/WIUT00015662/webtech-cw2
- [Hosted Application](link_to_your_hosted_application)

## Project Structure

/webtech-cw2 (root folder)
    /controllers
        /api
            /event
                index.js
        /web
            /home
                index.js
    /data
        events_db.json
    /public
        /css
            styles.css
        /js
            scripts.js
    /routes
        /api
            /event
                index.js
            index.js
        /web
            /home
                index.js
            index.js
    /services
        /event
            index.js
    /validators
        /event
            index.js
    /views
        /home
            add_update.pug
            index.pug
        head.pug
    .gitignore
    app.js
    package-lock.json
    package.json
  