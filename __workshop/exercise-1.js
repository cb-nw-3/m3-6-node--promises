// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require('request-promise');

// Returns the current position of the ISS
function getIssPosition() {
  return rp('http://api.open-notify.org/iss-now.json')
    // parse the JSON string to make it a javascript object
    .then(JSON.parse)
    // store the data in an object
    .then((data) => {
      // console.log(`ISS Latitude: ${data.iss_position.latitude} \nISS Longitude: ${data.iss_position.longitude}`)
      return {
        lat: Number(data.iss_position.latitude),
        lng: Number(data.iss_position.longitude)
      }
    })
    // log the object that the previous promise returned
    .then((result) => {
      console.log('issPosition', result)
      // we need to return a value at the end of a promise
      return result
    })
    // error catcher if there's a problem with the data
    .catch((error) => {
      console.log('Cannot find the position for the ISS')
    })
}

getIssPosition();

module.exports = { getIssPosition }