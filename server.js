const express = require("express");
const {MongoClient} = require('mongodb');
const app = express();
const port = 8080;

// This function provides to define a route handler for GET reqs to a given URL
app.get('/', function(req, res){

    // 
    var options = {
        root: path.join(__dirname)
    };
    // a variable for specified html page
    var fileName = 'index.html';

    // With this stetement, we can transfer a file at the given path
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

// With this function provides that this application is running on specified port
app.listen(port, () => {

   // Information for listening the application 
   console.log('App listening on port : ${port}');
});