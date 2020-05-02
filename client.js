const axios = require('axios');

axios.get('http://localhost:3000/')
  .then(({data}) => console.log(data))
  .catch(err => console.error(err))
