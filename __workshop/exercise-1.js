// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
// const fetch = require("node-fetch");
const rp = require("request-promise");
let getUrl = "http://api.open-notify.org/iss-now.json";

// Returns the current position of the ISS
function getIssPosition() {
  return rp(getUrl)
    .then((response) => {
      let data = JSON.parse(response);
      return {
        lat: data.iss_position.latitude,
        lng: data.iss_position.longitude,
      };
    })
    .catch((err) => console.log("err: ", err));
}
// getIssPosition().then((result) => console.log("result: ", result));

module.exports = { getIssPosition };
