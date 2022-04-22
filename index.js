const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

// middleware
// CORS Enabled for all origins
app.use(cors());
// body-parser for parsing JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//#region API
// Get list of customerdata
app.get('/customerdata', (req, res) => {
  fs.readFile('./Data/customerdata.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(200).send(data);
    console.log('GET /customerdata');
  });
});

// Get list of routes
app.get('/routes', (req, res) => {
  fs.readFile('./Data/routes.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(200).send(data);
    console.log('GET /routes');
  });
});

//#endregion

// Start server
app.listen(1997, () => {
  console.log('Server started on port 1997');
});
