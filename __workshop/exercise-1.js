// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => {
      const issLoc = JSON.parse(response);
      return {
        lat: issLoc.iss_position.latitude,
        lng: issLoc.iss_position.longitude,
      };
    })
    .then((response) => {
      return response;
    })
    .catch((err) => console.log("Error: ", err));
}

getIssPosition().then((data) => {
  console.log(data);
});
