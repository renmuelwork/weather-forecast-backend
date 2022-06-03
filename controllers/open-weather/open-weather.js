const weather_keys = require('../../constant/weather-api/variable')
const axios = require('axios');

var getWeatherForecast = (city,res)=>{
  try{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_keys.open_weather_api_key}&units=metric`)
          .then(data => {
            res(data.data)
          })
          .catch(err =>res(err))
    }
    catch(err){
      console.error("message:", err);
    }

}

module.exports.getWeatherForecast = getWeatherForecast;