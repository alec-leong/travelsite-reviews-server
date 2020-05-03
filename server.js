// server setup
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const colors = require('colors');
const {Listings} = require('./db/index.js')




//============================ Express  Middleware =============================

// create express application
const app = express();

const PORT = 3000;

// listen
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT.toString().green}`));

// set the 'Content-Type' that the middleware will parse
app.use(express.json());

// logger 
app.use((req, res, next) => {
  console.log(`${req.method.yellow} request at ${req.url.cyan}`);
  console.log(req.body);
  
  // next middleware
  next();
});





//=========================== HTTP request handlers ============================

app.get('/:id', ({params: {id}}, res) => {
  Listings.findById(id)
    .then(query => res.status(200).send(query))
    .catch(err => res.status(500).send(err))
})