

$().ready(function() {
	bowlGame();
});

function bowlGame() {
	scores = [];
	$("#game").empty();
	var total = 0;
	for(var idx = 0; idx < 10; idx++) {
		scores[idx] = rollBall();
		$("#game").append("<td>"+scores[idx]+"</td>")
		console.log("frame", idx+1, "score is", scores[idx])
		total += scores[idx];
	}
	$("#game").append("<td>"+total+"</td>")
	console.log("total score is", total);
}

function rollBall() {
	return Math.floor(Math.random() * 31);
}