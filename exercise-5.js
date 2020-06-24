// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

const rp = require("request-promise");
const env = require("dotenv");
env.config();
const opencage = require("opencage-api-client");
const { getIssPosition } = require("./exercise-1");
const { getAddressPosition } = require("./exercise-2");

function getDistance(pos1, pos2) {
    console.log(
        Math.sqrt(
            Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
        )
    );
}

function getDistanceFromIss(address) {
    let pos1 = "";
    let pos2 = "";
    return getAddressPosition(address).then(function (pos) {
        pos1 = pos;
        return getIssPosition().then(function (res) {
            pos2 = res;
            console.log(pos1, pos2);
            return getDistance(pos1, pos2);
        });
    });
}

getDistanceFromIss("1500 Pennsylvania Ave. Washington, DC");
