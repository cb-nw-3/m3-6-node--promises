// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

const rp = require("request-promise");
const env = require("dotenv");
env.config();
const opencage = require("opencage-api-client");

const options = {
    uri: "http://api.open-notify.org/iss-now.json",
    headers: {
        "User-Agent": "Request-Promise",
    },
    json: true,
};

const pos1 = rp(options)
    .then(function (res) {
        return {
            "": res.iss_position.latitude,
            "": res.iss_position.longitude,
        };
    })
    .catch(function (err) {
        console.log(err);
    });

const pos2 = function getAddressPosition(address) {
    const requestObj = {
        key: "b1de27a51e34472db2a062fce31d9a00",
        q: address,
    };
    return opencage
        .geocode(requestObj)
        .then((data) => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    const place = data.results[0];
                    return place;
                }
            } else {
                console.log("error", data.status.message);
            }
        })
        .then((data) => {
            console.log(data.geometry);
            return data;
        })
        .catch((error) => console.log("error", error.message));
};

pos1.then(console.log);
pos2("boston").then(console.log);

function getDistance(pos1, pos2) {
    console.log(
        Math.sqrt(
            Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
        )
    );
}
