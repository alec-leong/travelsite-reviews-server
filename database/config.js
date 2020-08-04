require('dotenv').config();

const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'travelsite';
const DB_SERVER = `${DB_HOST}:${DB_PORT}`;
const uri = `mongodb://${DB_SERVER}/${DB_NAME}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
const mongooseConfig = {
  options,
  uri,
};

module.exports = mongooseConfig;
