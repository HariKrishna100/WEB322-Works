// var express = require("express");
// var app = express();
// var path = require("path");

// var HTTP_PORT = process.env.PORT || 8080;

// // call this function after the http server starts listening for requests
// function onHttpStart() {
//   console.log("Express http server listening on: " + HTTP_PORT);
// }

// // setup a 'route' to listen on the default url path (http://localhost)
// app.get("/", function(req,res){
//     res.sendFile(path.join(__dirname,"/views/home.html"));
//     //res.send("Hello World<br /><a href='/contact'>Go to the contact page</a>");
// });

// // setup another route to listen on /about
// app.get("/contact", function(req,res){
//   res.sendFile(path.join(__dirname,"/views/contact.html"));
// })

// // setup another route to listen on /jobs
// app.get("/careers", function(req,res){
//   res.sendFile(path.join(__dirname,"/views/careers.html"));
// })

// // setup http server to listen on HTTP_PORT
// app.listen(HTTP_PORT, onHttpStart);

const Sequelize = require('sequelize');

// set up sequelize to point to our postgres database
var sequelize = new Sequelize('zbjwiusf', 'zbjwiusf', 'cVxj5Ohedg2yhsXUX5BXoLvIJvMfj07I', {
    host: 'peanut.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});

// Define a "Project" model
var Project = sequelize.define('Project', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
});

// synchronize the Database with our models and automatically add the 
// table if it does not exist

sequelize.sync().then(function () {

    // create a new "Project" and add it to the database
    Project.create({
        title: 'Project1',
        description: 'First Project'
    }).then(function (project) {
        // you can now access the newly created Project via the variable project
        console.log("success!")
    }).catch(function (error) {
        console.log("something went wrong!");
    });
});