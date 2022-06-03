const apiPaths = require('./constant/url-paths/api-paths');
var routes = require('./routes/index')
const cors = require('cors');
//server.js
var express = require('express');
var app = express();
app.use(cors());
routes(app);

app.use("*", function (req, res) {
    res.status(404).send();
});

var server = app.listen(3000, function() {
    console.log("Backend Application listening at http://localhost:3000")
})