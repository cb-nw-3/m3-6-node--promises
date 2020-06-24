// Exercise 1 - `getIssPosition`
// -----------------------------
const rp = require("request-promise");
const options = {
    uri: "http://api.open-notify.org/iss-now.json",
    headers: {
        "User-Agent": "Request-Promise",
    },
    json: true,
};

function getIssPosition() {
    return rp(options)
        .then(function (res) {
            console.log(
                "lat:" +
                    " " +
                    res.iss_position.latitude +
                    " " +
                    "lon:" +
                    " " +
                    res.iss_position.longitude
            );
            return {
                lat: parseInt(res.iss_position.latitude),
                lng: parseInt(res.iss_position.longitude),
            };
        })
        .catch(function (err) {
            console.log(err);
        });
}
module.exports = { getIssPosition };
