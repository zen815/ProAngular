
var connect = require('connect'),
	serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("../ProAngular/src"));

app.use('/bootstrap', serveStatic(__dirname + '/node_modules/bootstrap/dist/css/'));

app.use('/angular', serveStatic(__dirname + '/node_modules/angular/'));

app.use('/angular-i18n', serveStatic(__dirname + '/node_modules/angular-i18n/'));

app.listen(5000);

console.log("localhost:5000/index.html") ;