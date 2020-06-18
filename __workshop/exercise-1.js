// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module from package.json
const request = require('request-promise');

// Returns the current position of the ISS
function getIssPosition() {
    //fetch the information from the external source http link
    return request('http://api.open-notify.org/iss-now.json')

        .then(response => {
            //parse as JSON becuase the source is .json
            const issLocation = JSON.parse(response);
            return {
                lat: issLocation.iss_position.latitude,
                lng: issLocation.iss_position.longitude,
            }
        })
        //data is the previous object with values lat and lng
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.log('Error: ', error));
}       

getIssPosition();