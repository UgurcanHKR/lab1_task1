// Each module is installed by "npm install (module name)"
const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

// This function provides to define a route handler for GET reqs to a given URL
app.get('/', function(req, res){

    // A variable for the absolute path of the directory, 
    // containing the currently executing file.
    var options = {
        root: path.join(__dirname)
    };
    console.log(__dirname);
    // A variable for specified html page
    var fileName = 'index.html';

    // With this statement, we can transfer a file at the given path
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

// This function provides that this application is running on specified port
app.listen(port, () => {

   // Information for listening the application 
   console.log('App listening on port 3000...');
})


