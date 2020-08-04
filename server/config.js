require('dotenv').config();
const fs = require('fs');
const path = require('path');

let key = '';
let cert = '';
let plain = true;
let ssl = false;

if (/^(https|HTTP\/2|HTTP2)/i.test(process.env.APP_PROTOCOL)) {
  try {
    key = fs.readFileSync(__dirname, '../keys/localhost-privkey.pem');
    cert = fs.readFileSync(path.join(__dirname, '../keys/localhost-cert.pem'));
    plain = !plain;
    ssl = !ssl;
  } catch (err) {
    console.error(err);
  }
}

const spdyOptions = {
  key,
  cert,
  spdy: {
    plain,
    ssl,
  },
};

module.exports = spdyOptions;
