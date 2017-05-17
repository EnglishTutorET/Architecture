var express = require('express');  
var app = express();  
var db  = require('./db');

var port = 4000;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
	res.redirect("index.html")
});

app.post('/submit',function(req, res){
	var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    db
    	.insert([{name: firstName,surname: lastName}])
    	.into('blog_dev')
    	.catch(err => console.log(err))
    res.redirect('/show');
})

app.get('/show',function(req,res){
	db
		.select('*')
		.from('blog_dev')
		.then(function(data){
			res.send(data);
		})
		.catch(err => {
			done(err)
		})
})

app.use(express.static('public'));

app.listen(port);  
console.log("Listening on port", port);  