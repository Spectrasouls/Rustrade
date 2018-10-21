var express = require('express');
var secure = require('express-force-https');
var serveStatic = require('serve-static');
var path = require('path');


var app = express();


app.use("/", serveStatic (path.join (__dirname, '/dist')));

const port = process.env.PORT || 5000
app.listen(port);

console.log('Server started on port' + port);
