const { URI, OPTIONS, COLLECTION } = require('./config.js');
const Promise = require('bluebird');
const mongoose = Promise.promisifyAll(require('mongoose'));
const { Schema } = mongoose;
const colors = require('colors');

// instance of child schema 
const reviewSchema = new Schema({
  username: String,
  location: String,
  contributions: Number,
  rating: Number,
  title: String,
  review: String,
  dateOfReview: String,
  dateofTrip: String,
  tripType: String,
  helpful: Number,
});

// instance of parent schema
const listingsSchema = new Schema({
  reviews: [reviewSchema]
});

// create model(model_name, instance_of_schema, collection_name)
const Listings = mongoose.model(COLLECTION, listingsSchema);

// initial connection and handle initial connection errors
mongoose.connect(URI, OPTIONS)
  .then(() => console.log(`Connected to ${'mongoDB'.green} Database`))
  .catch(err => console.error(err))

// connection to database 
const connection = mongoose.connection;

// handle errors after initial connection was established by listening for error events on the connection
connection.on('error', err => console.error(err));

// successful connection
connection.once('open', () => {
  console.log(`Using database ${connection.name.green}`);
});

module.exports = {
  connection, // connection to database
  Listings // db.listings collection
}
