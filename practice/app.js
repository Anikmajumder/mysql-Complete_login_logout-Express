//DEC
var express 		= require('express');
var ejs 			= require('ejs');
var bodyParser 		= require('body-parser');
var expressSession 	= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var home 			= require('./controllers/home');
var app 			= express();


//CONFIG
app.set('view engine', 'ejs');



//MIDDLEWARE
app.use(bodyParser.urlencoded({'extended': false}));
app.use(expressSession({secret: 'my top secret password', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);



//ROUTING
app.get('/', function(req, res){
	res.send('Welcome to express web server...');
});


app.get('/viewcookie', function(req, res){
	
	res.send(req.cookies['my_cookie']);
});




//SERVER STARTUP
app.listen(3000, function(){
	console.log('Server started at 3000....');
});
