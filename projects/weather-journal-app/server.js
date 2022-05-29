// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express()

/* Middleware*/
const bodyParser = require('body-parser')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.get('/info', (req, res) => {
    res.send(projectData)
})

app.post('/Adddata', (req, res) => {
    projectData['temperature'] = req.body['temperature']
    projectData['date'] = req.body['date']
    projectData['user_response'] = req.body['user_response']
    res.send(projectData)
})

app.listen(80, () => {
    console.log('server is running at 127.0.0.1:80')
})