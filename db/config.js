require('dotenv').config();

const DB_HOST =  process.env.DB_HOST || '127.0.0.1';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_SERVER = `${DB_HOST}:${DB_PORT}`;
const DB = 'tripAdvisor';
const URI = `mongodb://${DB_SERVER}/${DB}`;
const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
const COLLECTION = 'listings';

module.exports = {
  COLLECTION,
  OPTIONS,
  URI,
};
