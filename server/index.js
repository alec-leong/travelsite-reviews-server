const colors = require('colors');
const express = require('express');
const path = require('path');
const { Listings } = require('../db/index.js');


/* ======================================= Express server ======================================= */

// create express application
const app = express();

const PORT = 3000;

// listen
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${(PORT.toString())}`));

// set the 'Content-Type' that the middleware will parse
app.use(express.json());

// logger
app.use(({ body, method, url }, res, next) => {
  console.log(`${method.yellow} request at ${colors.cyan(url)}`);
  console.log(body);

  // next middleware
  next();
});

// serving static file
app.use(express.static(path.join(__dirname, '../client/dist')));


/* ==================================== HTTP request handlers =================================== */

// app.get('/:id', ({ params: { id } }, res) => {
//   Listings.findById(id)
//     .then((query) => res.status(200).send(query))
//     .catch((err) => res.status(500).send(err));
// });

app.get('/reviews', (req, res) => {
  Listings.findOne()
    .then(query => {
      console.log(query);
      res.status(200).send(query);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    })
});

module.exports = {
  server,
};
