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

// for '../test/server.test.js' 
app.get('/reviews/:id', ({ params: { id } }, res) => {
  Listings.findById(id)
    .then((query) => res.status(200).send(query))
    .catch((err) => res.status(500).send(err));
});

app.get('/reviews', (req, res) => {
  Listings.findOne()
    .then(({ reviews }) => res.status(200).send(reviews))
    .catch(err => res.status(500).send(err));
});

app.put('/reviews', ({ body: { _id } }, res) => { // nested destructuring
  // console.log(_id);
  // res.status(200).send('PUT resolved')

  Listings.findOne()
  .then(res => {
    const doc = res;
    doc.reviews.id(_id).helpful++;
    return Listings.findByIdAndUpdate({ _id: _id[0] }, new Listings(doc));
  })
  .then(() => Listings.findOne())
  .then(({ reviews }) => res.status(200).send(reviews)) // update
  .catch(err => res.status(500).send(err));
});

module.exports = {
  server,
};
