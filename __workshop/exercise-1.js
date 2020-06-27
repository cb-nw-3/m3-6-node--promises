// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
let requestPromise = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
  // we need to retrieve the information
  let info = {
    method: "GET",
    uri: "http://api.open-notify.org/iss-now.json",
  };

  return (
    requestPromise(info)
      .then((response) => {
        // we need to parse out the data in the json file
        const issLocation = JSON.parse(response);
        return {
          lat: issLocation.iss_position.latitude,
          lng: issLocation.iss_position.longitude,
        };
      })
      // rejected cases error message
      .catch((error) => console.log("Error: ", error))
  );
}

getIssPosition().then((data) => console.log(data));
