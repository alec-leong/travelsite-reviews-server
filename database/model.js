const mongoose = require('mongoose');
const modelName = require('./modelName.js');
const { listingsSchema } = require('./schema.js');

const collectionName = modelName.toLowerCase();

// Create model instance.
const Listings = mongoose.model(modelName, listingsSchema, collectionName);

module.exports = Listings;
