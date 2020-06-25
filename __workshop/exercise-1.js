// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const requestProm = require("request-promise");

// Done in class
// Returns the current position of the ISS
function getIssPosition() {
  return requestProm("http://api.open-notify.org/iss-now.json")
    .then((resultString) => {
      return JSON.parse(resultString);
    })
    .then((resultObject) => {
      return {
        lat: Number(resultObject.iss_position.latitude),
        lng: Number(resultObject.iss_position.longitude),
      };
    });
}
getIssPosition().then((result) => console.log(result));

module.exports = {
  getIssPosition,
};
