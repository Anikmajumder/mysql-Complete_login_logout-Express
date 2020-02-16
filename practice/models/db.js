var mysql = require('mysql');

var config={

host      : 'localhost',
user      : 'root',
password  : '',
database  : 'atp3'
};

var getConnection = function(callback){


var connection = mysql.createConnection(config);

connection.connect(function(err){


if(err){


	console.log('connection error');

}
console.log('connect as id '+connection.threadId);


}); 

callback(connection);

}

module.exports= {
	getResult: function(sql, callback){

		getConnection(function(connection){
			connection.query(sql, function (error, results) {

				callback(results);
			});

			connection.end(function(err) {
				console.log('connection ending....');
			});
		});
	}
}
