// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.

var rp = require('request-promise');
const { get } = require('request-promise');


var options = {
    uri: 'http://api.open-notify.org/iss-now.json',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};


// Returns the current position of the ISS
function getIssPosition() {

    return rp(options)
        .then (result => {return result.iss_position})
        .then (position => {console.log(position)});
}

//http://api.open-notify.org/iss-now.json

// console.log(getIssPosition());
getIssPosition();