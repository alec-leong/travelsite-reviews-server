const colors = require('colors');
const mongoose = require('mongoose');
const mongooseConfig = require('./config.js');

// Initial connection and handle initial connection errors.
mongoose.connect(mongooseConfig.uri, mongooseConfig.options)
  .then(() => console.log(`Connected to ${colors.green('MongoDB')} database.`))
  .catch(console.error);

// Conn to database.
const db = mongoose.connection;

// Handle errors after initial connection was established by listening for error events on the
// connection.
db.on('error', (err) => console.error(err));

// Successful connection.
db.once('open', () => console.log(`Using database ${db.name.green}.`));

module.exports = db;
