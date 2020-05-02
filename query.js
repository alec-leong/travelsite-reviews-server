const Promise = require('bluebird');
const mongoose = Promise.promisifyAll(require('mongoose'));
const {Schema} = mongoose;

// configuration
const SERVER = '127.0.0.1:27017';
const DB = 'tripAdvisor';
const URI = `mongodb://${SERVER}/${DB}`;
const OPTIONS =  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false};
const COLLECTION = 'listings';

// instance of schema 
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
const db = mongoose.connection;

// handle errors after initial connection was established by listening for error events on the connection
db.on('error', err => console.error(err));

// successful connection
db.once('open', () => {
  console.log(`Using database ${db.name.green}`);
});

module.exports = {
  Listings
}