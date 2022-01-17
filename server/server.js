const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

//creating instance of express
const app = express();

// let corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 ,// For legacy browser support
//     methods: "GET, PUT"
// }

// app.use(cors(corsOptions))


const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

console.log("start");
// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

//launching our server on port 3001.
const server = app.listen(8000, () => {
    console.log('listening on port %s...', server.address().port);
  });