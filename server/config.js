const fs = require('fs');
const path = require('path');

const OPTIONS = {
  key: fs.readFileSync(path.join(__dirname, '../localhost-privkey.pem')), 
  cert: fs.readFileSync(path.join(__dirname, '../localhost-cert.pem')),
  spdy: {
    plain: true,
    ssl: false,
  },
}; 

const PORT = 3004;

module.exports = {
  OPTIONS,
  PORT,
};
