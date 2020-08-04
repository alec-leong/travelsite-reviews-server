require('dotenv').config();
require('../database/index.js');
const colors = require('colors');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const Promise = require('bluebird');
const open = require('open');
const os = require('os');
const spdy = require('spdy');
const spdyOptions = require('./config.js');
const Listings = require('../database/model.js');
const AES = require('crypto-js/aes');
const UTF8 = require('crypto-js/enc-utf8');

// Create ExpressJS application.
const app = express();

/* ========================================= Middleware ========================================= */

// Enable cross-origin resource sharing (CORS).
app.use(cors());

// Compression middleware.
app.use(compression());

// Security-related HTTP middleware.
app.use(helmet());

// Set 'Content-Type' that the middleware will parse.
app.use(express.json());

// Logging middleware.
app.use(({ body, method, url }, res, next) => {
  console.log(`${method.yellow} request at ${url.cyan}`);
  console.log(body);

  next(); // Next middleware.
});

// Serving static file.
app.use(express.static(path.join(__dirname, '../client/dist')));

/* ==================================== HTTP request handlers =================================== */

// Secret key.
const key = process.env.REVIEW_LIST_KEY || '';

// for `../test/server.test.js`
app.get('/reviews/:id', ({ params: { id } }, res) => {
  Listings
    .findById(id)
    .then((document) => res.status(200).send(document))
    .catch((err) => res.status(500).send(err));
});

app.get('/reviews', (req, res) => {
  Listings
    .findOne({ // Conditions.
      /* No conditions */
    }, { 
      _id: 0,
      __v: 0,
      'reviews._id': 0 
    }) // Exclude `_id`, `__v`, and subdocument `review`'s `id` fields.
    .then(({ reviews }) => res.status(200).send(reviews))
    .catch((err) => res.status(500).send(err));
});

app.put('/reviews', (req, res) => {
  const { publicListingId, publicReviewId, operand } = req.body;

  // Decrypt request parameters.
  const listingId = AES.decrypt(publicListingId, key).toString(UTF8);
  const [,reviewId] =  AES.decrypt(publicReviewId, key).toString(UTF8).split(',');

  Listings
    .findOneAndUpdate({ // Conditions.
      _id: listingId,
      'reviews._id': reviewId,
    }, {
      $inc: { // Increment subdocument's `helpful` field by +/-1.
        'reviews.$.helpful': operand,
      }, 
    }, {
      new: true, // If you set new: true, findOneAndUpdate() will instead give you the object after update was applied. Source: https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
      fields: '-_id -__v -reviews._id', // Exclude `_id`, `__v`, and subdocument `review`'s `id` fields. Source: https://mongoosejs.com/docs/api.html#query_Query-select
    })
    .then((document) => {
      /** document
       * {
       *    publicListingId: String,
       *    reviews: [Object]
       * }
       */
      const { reviews } = document;
      res.status(200).send(reviews)
    })
    .catch((err) => res.status(500).send(err));
});

/* ========================================= SPDY server ======================================== */

const server = spdy.createServer(spdyOptions, app);
const port = process.env.APP_PORT || 3000;

server.listen = Promise.promisify(server.listen);
server.listen(port)
  .then(() => {
    console.log(`SPDY server listening on port ${colors.green(port)}`);

    // if (
    //   process.env.NODE_ENV === 'development'
    //   && (process.env.APP_HOST === 'localhost' || process.env.APP_HOST === '127.0.0.1')
    // ) {
    //   let browser;
    //   switch (os.type()) {
    //     case 'Linux':
    //       browser = 'google-chrome';
    //       break;
    //     case 'Darwin':
    //       browser = 'google chrome';
    //       break;
    //     case 'Windows_NT':
    //       browser = 'chrome';
    //       break;
    //     default:
    //       browser = null;
    //   }

    //   if (browser) {
    //     const protocol = /^(https|HTTP\/2|HTTP2)/i.test(process.env.APP_PROTOCOL) ? 'https' : 'http';
    //     open(`${protocol}://localhost:${port}`, { browser });
    //   }
    // }
  })
  .catch(console.error);
