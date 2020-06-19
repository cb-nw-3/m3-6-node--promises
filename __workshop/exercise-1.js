// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
function getIssPosition() {
    return request('http://api.open-notify.org/iss-now.json')
        .then(response => {
            const location = JSON.parse(response);

            return {
                lat: location.iss_position.latitude,
                lng: location.iss_position.longitude,
            }
        })
        .then(data => {
            console.log(data);
            return data;

        })
        .catch(error => console.log(error));
}
getIssPosition();