// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
const { getIssPosition } = require('./exercise-1');
const { getAddressPosition } = require('./exercise-2');

function getDistance(address) {
    return getIssPosition()
        .then(position => {
            return getAddressPosition(address)
                .then(location => {
                    return calculateDistance(position, location)
                })
        })
}

function calculateDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

getDistance('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
    .then((data) => console.log(data));