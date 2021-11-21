// Importing dotenv, path modules and create a path
require('dotenv').config();
const path = require('path');

// Importing express module and create an app
const express = require('express');
const app = express();

// importing measurementsRouter from router output object in ....routes.js file
const { router: measurementsRouter } = require('./api/routes/measurements.routes');

// This USE function is used to mount the specified middleware function(s) 
// at the path which is being specified.
app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'client/css')));

// importing connectToDatabase from .../database file
const { connectToDatabase } = require('./database');

// This GET function is used when URL is the same with "/"
// With this URL, GET function runs and index.html is sent as a response 
app.get("/", (_, res) => {
    res.sendFile("index.html");
});

// This USE function is used to mount measurementsRouter
app.use(measurementsRouter);

// After running connectToDatabase() function, with chaining, a function is created
// and PORT is set 8082 or is taken from "process.env.PORT"
// LISTEN function is used to bind and listen the connections on the specified host and port
// Print a message to console
connectToDatabase()
    .then(() => {
        const PORT = process.env.PORT || 8083;
        app.listen(PORT, () => {
            console.log('Listening to port ' + PORT);
        });
    })
    .catch((error) => console.error(error));
