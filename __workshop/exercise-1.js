// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
  rp("http://api.open-notify.org/iss-now.json")
    .then((resultString) => {
      return JSON.parse(resultString);
    })
    .then((resultObject) => {
      return {
        latitude: resultObject.iss_position.latitude,
        longitude: resultObject.iss_position.longitude,
      };
    })
    .then((res) => console.log(res))
    .catch((err) => console.log("Error: ", err));
}

getIssPosition();
