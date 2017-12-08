"use strict"

// var pkid = 2;

$().ready(function() {

	$("#getpk").click(function() {
		console.log("Button clicked");
		var id = $("#products").val();
		getData(id);
	});

	$.getJSON("http://prs.doudsystems.com/Products/List")
		.done(function(products) {
			console.log(products);
			loadSelectList(products);
		});

});

function loadSelectList(products) {
	var select = $("#products");
	for(var product of products) {
		var option = "<option value='" + product.ID + "'>" + product.Name + "</option>";
		select.append(option);
	}
}

function getData(id) {

	$.getJSON("http://prs.doudsystems.com/Products/Get/" + id)
		.done(function(product) {
			console.log(product);
			fillData(product);
		}).fail(function() {

		});
}

function fillData(product) {
	$("#idx").val(product.ID);
	$("#name").val(product.Name);
	$("#vendorpartnumber").val(product.VendorPartNumber);
	$("#price").val(product.Price);
	$("#unit").val(product.Unit);
}
