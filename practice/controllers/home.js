var express = require('express');
var db = require.main.require('./models/db');
var router = express.Router();


router.get('/', function(req, res){

	if(req.session.un != null){

		var sql = "select * from users ";
		db.getResult(sql, function(results){
			res.render('home', {userList: results});
		});
		
	}else{
		res.redirect('/login');
	}

});

module.exports = router;