const axios = require('axios');

const id = 7;

axios.get(`http://localhost:3000/${id}`)
  .then(({ data }) => console.log(data))
  .catch(console.error);
