const axios = require('axios');
const id = "5eae0aa5a1eb902fe8b9674b";

axios.get(`http://localhost:3000/${id}`)
  .then(({data}) => console.log(data))
  .catch(err => console.error(err))
