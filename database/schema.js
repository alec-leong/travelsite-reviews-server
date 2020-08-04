const mongoose = require('mongoose');

const { Schema } = mongoose;

// Instance of child schema.
const reviewsSchema = new Schema({
  _id: {
    type: Number,
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
  },
  publicReviewId: {
    type: String,
    minlength: 1,
  },
  publicListingId: {
    type: String,
    minlength: 1,
    ref: 'Listings',
  },
  username: {
    type: String,
    match: /^[a-zA-Z0-9_.]+$/, // Pattern: alphanumeric, underscore (_), and period (.) characters.
  },
  location: {
    type: String,
    match: /^[a-zA-Z\s'-]+,{1}\s{1}[a-zA-z\s'-]+$/, // Pattern: city, state
  },
  contributions: {
    type: Number,
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  title: {
    type: String,
    minlength: 1,
    maxlength: 120,
  },
  review: {
    type: String,
    minlength: 100,
    maxlength: 20000,
  },
  dateOfReview: {
    type: String,
    match: /^(January|February|March|April|May|June|July|August|September|October|November|December)\s{1}\d{4}$/, // Pattern: month year
  },
  dateOfTrip: {
    type: String,
    match: /^(January|February|March|April|May|June|July|August|September|October|November|December)\s{1}\d{4}$/,
  },
  tripType: {
    type: String,
    enum: ['Couples', 'Family (young children)', 'Family (teens)', 'Friends', 'Business', 'Solo'],
  },
  helpful: {
    type: Number,
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
  },
});

// Instance of parent schema.
const listingsSchema = new Schema({
  _id: { // Override ObjectId - the SHA.
    type: Number,
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
  },
  publicListingId: {
    type: String,
    minlength: 1,
  },
  reviews: [reviewsSchema],
});

module.exports = {
  listingsSchema,
  reviewsSchema,
};
