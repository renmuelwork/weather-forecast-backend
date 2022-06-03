const apiPaths = require('../../constant/url-paths/api-paths')
var geocode = require('../../controllers/geocode/geocode')

const router = require('express').Router();
router.get('', function(req, res){
   try{
    var city = req.query.city
    geocode.getAddress(city, res => {
      res.send(res)
    });
   }catch(e){
       res.send(e)
   }
});

module.exports = router;