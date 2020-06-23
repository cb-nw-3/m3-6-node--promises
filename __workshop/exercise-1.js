// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.

const rp = require('request-promise');

// Returns the current position of the ISS
function getIssPosition() {
  return rp('http://api.open-notify.org/iss-now.json') // The request-promise package is used to retrieve the API on the webpage.
    .then((response) => {
      // This is used to retrieve the object, but it is retrieved as a string,
      //   console.log(response);
      const issLocation = JSON.parse(response); // This converts the string from the output to a JSON object and assigns it to issLocation.
      return {
        // mes: issLocation.message,
        // timestamp: issLocation.timestamp,
        lat: issLocation.iss_position.latitude,
        lng: issLocation.iss_position.longitude,
      }; // This results in an object with two keys, and is ready to be used for another "then" method.
    })
    .then((data) => {
      console.log(data);
      return data; // Make it ready to be used in another "then" method".
    })
    .catch((err) => console.log('Error: ', err));
}

getIssPosition(); // Calls the function "getIssPosition".
