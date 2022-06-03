const apiPaths = require('../../constant/url-paths/api-paths')
var weatherForecast = require('../../controllers/open-weather/open-weather')

const router = require('express').Router();
router.get('', function(req, res){
   try{
    var city = req.query.city
    weatherForecast.getWeatherForecast(city, callback => {
       res.status(200).send(callback)
    });
   }catch(e){
       res.send(e)
   }
});

module.exports = router;