var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var routes = require('./controllers/burgers_controller.js');
route.burgerController(app);
app.use('/', routes);
app.use('/create', routes);

app.listen(PORT, function(err, res) {
    console.log("Listening on PORT " + PORT);
});
