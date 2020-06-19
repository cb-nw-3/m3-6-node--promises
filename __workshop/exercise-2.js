// Exercise 2 - `getAddressPosition`
// ---------------------------------
const opencage = require('opencage-api-client');
require('dotenv').config()


function getAddressPosition(address) {
    const requestObj = {
        key: 'fecb884c0eaa45a0b50b45d80442d981',
        q: address
    };

    return opencage.geocode(requestObj)
        .then(data => {
            console.log(JSON.stringify(data));
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    let place = data.results[0];
                    console.log('Formatted -->', place.formatted);
                    console.log('Geometry -->', place.geometry);
                    console.log('Timezone -->', place.annotations.timezone.name);
                    return place;
                }
            } else {
                console.log('error', data.status.message);
            }
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.log('error', error.message));
}
getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');