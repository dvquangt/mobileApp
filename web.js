var express = require('express');
var app = express();
var pg = require('pg');
// pg.defaults.ssl = true;

app.use(express.static(__dirname + "/www"));
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

// app.get('/dash', function (request, response) {
// 	console.log('getOrder ...');
// 	pg.connect(process.env.DATABASE_URL, function(err, client) {
// 	  	if (err) throw err;
// 	  	console.log('Get data from server...');
// 	  	client.query('SELECT Order__c, CustomerName__c, ProductName__c FROM Order__c ;', function(err, result) {
// 		 	if (err){
// 				console.error(err); response.send("Error " + err); 
// 			}else{ 
// 				response.send(result.rows); 
// 			}
// 		});
// 	});
// });

app.listen(process.env.PORT || 5000);

