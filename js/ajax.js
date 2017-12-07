"use strict"

$().ready(function() {

	console.log("Before JSON Call");
	$.getJSON("http://prs.doudsystems.com/Users/List")
		.done(function(users) {
			console.log(users);
			buildTable(users);
		});
	console.log("After JSON Call");

});

function buildTable(users) {
	// build the table rows 
	for(var user of users) {
		console.log(user.FirstName, user.LastName);
	}
}
