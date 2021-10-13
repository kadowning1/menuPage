const axios = require('axios');
const apiKey = https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com



// Make a request for a user with a given ID
axios.get(apiKey)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });