var express = require('express');
var Service = require('../modules/service');

var app = express();

var port = 4000;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.redirect("index.html")
});

app.post('/submit', function (req, res) {
    var service = new Service("/submit");
    service.post(req.body, function (err, created) {
        if (err || created.error) next(err || created.error);
        else res.redirect('/show');
    });
})

app.get('/show', function (req, res) {
    var service = new Service("/show");
    service.get(function (err, created) {
        if (err || created.error) next(err || created.error);
        else res.send(created);
    });
})


app.use(express.static('./public'));

app.listen(port);
console.log("Listening on port", port);  