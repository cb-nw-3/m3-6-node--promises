// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.

const rp = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
    rp('http://api.open-notify.org/iss-now.json')
        .then(response => {
            let locationISS = JSON.parse(response);
            return {
                lat: locationISS.iss_position.latitude,
                lng: locationISS.iss_position.longitude
            }
        })
        .then(data => console.log(data));
};

getIssPosition();