var express = require('express');
var db		= require.main.require('./models/db');
var router = express.Router();


router.get('/', function(req, res){
	res.render('login');
});

router.post('/', function(req, res){
	
	var sql = "select * from users where name='"+req.body.username+"' and pass='"+req.body.password+"'";
	db.getResult(sql, function(results){

		if(results.length > 0){
			req.session.un = req.body.username;
			res.redirect('/home');
		}else{
			res.send('invalid username/password...');
		}
	});
});


module.exports = router;