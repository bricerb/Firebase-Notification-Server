// Importing modules
const express             = require('express');
const bodyParser          = require("body-parser");
const path                = require("path");
const axios               = require("axios");
const data                = require("dotenv").config({path: './data.env'});

// Initialze Express App
const app = express();

// Set Port
let port = (process.env.PORT || 3000);
app.set('port', port);

// Serve static files to server
app.use(express.static(path.join(__dirname, "public")));

// Body parser and validator implementation
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Variables
let url = 'https://fcm.googleapis.com/fcm/send';

let deviceToken = data.parsed.DEVICE_TOKEN;
let authorization = "key=" + data.parsed.AUTHORIZATION;

// Endpoints
app.get('/', (req,res) => {
  res.sendFile('views/index.html', {root: __dirname });
});

app.post('/', (req, res) => {
  // Object to be sent to Firebase server
  let obj = {
    notification: req.body,
    to: deviceToken,
  }

  // Setting up axios request with necessary headers
  var instance = axios.create({
    baseURL: url,
    headers: {'Content-Type': 'application/json', 'Authorization': authorization}
  })

  // Post Request to Firebase server
  instance
  .post(url, obj)
  .then(response => {
    // Success Handling
    res.sendFile('views/index.html', {root: __dirname });
  })
  .catch(err => {
    // Error Handling
    res.sendFile('views/index.html', {root: __dirname });
  })
})

// Listening on port
app.listen(app.get('port'), () => {
    console.log('Serving up Mongos on', port);
});
