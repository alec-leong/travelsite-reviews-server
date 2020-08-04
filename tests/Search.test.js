require('dotenv').config();

const host = process.env.APP_HOST || 'localhost';
const port = process.env.APP_PORT || 3000;
const protocol = /^(https|HTTP\/2|HTTP2)/i.test(process.env.APP_PROTOCOL) ? 'https' : 'http';
const key = `<Search /> test ${host}:${port}`;

//  <Search /> end-to-end test.
module.exports = {
  [key]: (client) => {
    client
      .url(`${protocol}://${host}:${port}`)
      .waitForElementVisible('body')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'ugit')
      .assert.containsText('.review', 'ugit')
      .end(() => process.exit());
  },
};
