"use strict"

var url = "http://prs.doudsystems.com";

$().ready(function() {

	$.getJSON(url+"/Vendors/List")
		.done(function(vendors) {
			console.log(vendors);
			buildTable(vendors);
		});

});

function buildTable(vendors) {
	var tbody = $("#vendors");
	tbody.empty()
	for(var vendor of vendors) {
		var str = "<tr>";
		str += "<td>" + vendor.Code + "</td>";
		str += "<td>" + vendor.Name + "</td>";
		str += "<td>" + vendor.City + ", " + vendor.State + "</td>";
		str += "<td>" + vendor.Email + "</td>";
		str += "<td>" + (vendor.IsRecommended ? "Yes" : "No") + "</td>";
		str += "</tr>";
		tbody.append(str);
	}
}