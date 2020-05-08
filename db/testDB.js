const { Listings } = require('./index.js');

Listings.find()
  .then(console.log)
  .catch(console.error)