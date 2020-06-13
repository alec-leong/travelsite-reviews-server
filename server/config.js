require('dotenv').config();
const fs = require('fs');
const path = require('path');

const OPTIONS = {
  spdy: {
    plain: true,
    ssl: false,
  },
}; 

const PORT = process.env.SERVER_PORT || 3000;

module.exports = {
  OPTIONS,
  PORT,
};
