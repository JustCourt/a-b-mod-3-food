var MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const dbRoute = 'mongodb://courtney:password1@ds219055.mlab.com:19055/food';

app.route('/food').get((req, res) => {
	MongoClient.connect(dbRoute, function(err, client) {
		var db = client.db('food');
		db.collection("restaurants").find({}).toArray(function(err, result) {
			if (err) return console.log(err);
			console.log(result);
			res.send('');
			client.close();
		})
	});
})


app.listen(3000, () => {
	console.log('listening on 3000');
})