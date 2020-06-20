// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
  return (
    request("http://api.open-notify.org/iss-now.json")
      .then((response) => {
        //console.log(data);
        const issData = JSON.parse(response);
        return {
          lat: issData.iss_position.latitude,
          lng: issData.iss_position.longitude,
        };
      })
      // .then((data) => {
      //   console.log("from ex1: ", data);
      //   return data;
      // })
      .catch((error) => console.log("error: ", error))
  );
}

//getIssPosition().then(console.log);

module.exports = { getIssPosition };
