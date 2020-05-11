module.exports = {
  'Demo test localhost:3000': (client) => {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'fugit')
      .assert.containsText('.review', 'fugit')
      .end()
  },
};
