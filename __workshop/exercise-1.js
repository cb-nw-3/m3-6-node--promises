// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
  request("http://api.open-notify.org/iss-now.json")
    .then((response) => {
      //console.log(data);
      const issData = JSON.parse(response);
      return {
        lng: issData.iss_position.longitude,
        lat: issData.iss_position.latitude,
      };
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log("error: ", error));
}

getIssPosition();
