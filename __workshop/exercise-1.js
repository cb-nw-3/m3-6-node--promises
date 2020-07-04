// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require('request-promise');

// Returns the current position of the ISS
function getIssPosition() {
    return rp('http://api.open-notify.org/iss-now.json')
        .then(jsonObj => {
            const location = JSON.parse(jsonObj);
            return {
                lat: location.iss_position.latitude,
                lng: location.iss_position.longitude,
            }
        })
        .then((result) => {console.log(result);
            return result;
    })
        .catch((error) => console.log(error));
}

// getIssPosition();

module.exports = {getIssPosition};