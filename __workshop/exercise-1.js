// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
  rp("https://api.wheretheiss.at/v1/satellites/25544")
    .then((result) => {
      console.log(
        `The ISS is currently at: Longitude: ${
          JSON.parse(result).longitude
        }, Latitude: ${JSON.parse(result).latitude}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

getIssPosition();
