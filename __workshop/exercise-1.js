// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
// const fetch = require("node-fetch");
const rp = require("request-promise");
let getUrl = "http://api.open-notify.org/iss-now.json";

// Returns the current position of the ISS
function getIssPosition() {
  return rp(getUrl)
    .then((response) => JSON.parse(response))
    .then((data) => {
      return {
        lat: data.iss_position.latitude,
        lng: data.iss_position.longitude,
      };
    })
    .then((values) => {
      console.log("values: ", values);
      return values;
    })
    .catch((err) => console.log("err: ", err));
}
getIssPosition();

module.exports = { getIssPosition };
