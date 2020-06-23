// Exercise 2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client'); // To activate opencage
require('dotenv').config(); // To activate dotenv, to protect our API to not share with Githut Community(For security reason)

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };

  return opencage
    .geocode(requestObj) // This is a specific method for this particular API.
    .then((data) => {
      if (data.status.code == 200) {
        if (data.results.length > 0) {
          const place = data.results[0];
          return place;
        }
      } else {
        console.log('error', data.status.message);
      } // This is a validation for the data received.
    })
    .then((data) => {
      console.log(data.geometry);
      return data.geometry; // This will only return a part of the Object "data" from the API,
      // we did not need to parse the data as it came back as an object
      // and be used a method to get only the geometry.
    })
    .catch((error) => console.log('error', error.message));
}

getAddressPosition('1060 boul Robert-Bourassa, Montréal, QC H3B 4V3');

module.exports = { getAddressPosition };
