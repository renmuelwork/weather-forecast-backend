const axios = require('axios');
const apiKey = require('../../constant/api-keys/keys')
var getWeatherForecast = require('../../controllers/open-weather/open-weather') 

var geocodeAddress = (address,res) => {
    var encodeAddress = encodeURIComponent(address);
    try{
         axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey.GEOCODING_API}&address=${encodeAddress}`)
               .then(data => {
                const placeData =  data.data.results[0]
                if (!placeData && !placeData.results && !placeData.geometry) {
                   return res.status(400).send();
                } else {
                    const lat = placeData.geometry.location.lat
                    const long = placeData.geometry.location.lng
                    getWeatherForecast.getWeatherForecast(lat,long, callback=> {
                        res(callback)
                    });
                }
               })
               .catch(err => res(err));
     }
     catch(err){
        console.error("message:", err);
     }
}
module.exports.getAddress = geocodeAddress;