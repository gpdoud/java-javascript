"use strict"

var nbr = 0;

$().ready(function() {
	$("#dec").click(dec);
	$("#inc").click(inc);
	display();
});

function inc(){
	nbr++;
	display()
}
function dec() {
	nbr--;
	display()
}
function display() {;
	var nbrCtrl = $("#nbr");
	nbrCtrl.val(nbr);
	nbrCtrl.css("color", "black");
	nbrCtrl.css("font-style", "normal");
	nbrCtrl.css("font-weight", "normal");

	if(nbr == 0)
		return;

	if(nbr % 2 == 0) {
		nbrCtrl.css("color", "red")
	}
	if(nbr % 3 == 0) {
		nbrCtrl.css("font-style", "italic");
	}
	if(nbr % 7 == 0) {
		nbrCtrl.css("font-weight", "bold");
	}
}