var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path');
require('./server/config/mongoose.js')
app.use(bodyParser.json());
require('./server/config/routes.js')(app)
app.use(express.static(__dirname + '/public/dist/public'));
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000, function () {
    console.log("listening on port 8000");
})