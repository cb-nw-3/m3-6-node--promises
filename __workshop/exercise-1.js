// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
  const options = {
    method: "GET",
    uri: "http://api.open-notify.org/iss-now.json",
  };

  return rp(options)
    .then((response) => {
      const issLocation = JSON.parse(response);
      return {
        lat: issLocation.iss_position.latitude,
        lng: issLocation.iss_position.longitude,
      };
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

getIssPosition();
