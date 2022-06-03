
const apiPaths = require('../constant/url-paths/api-paths')
// ROUTES
var geocode = require('./geocode/index')
var weather = require('./weather-forecast/index')


module.exports = function(app){
    app.use(`${apiPaths.API}${apiPaths.V1}${apiPaths.GEOCODE}`, geocode)
    app.use(`${apiPaths.API}${apiPaths.V1}${apiPaths.GET_WEATHER}`, weather)
}