/** DOWNLOAD IMAGES **/
document.getElementById('downloadBtn').addEventListener('click', function(){
	document.getElementById('downloadProxy').click();
});

// LOCAL VARIABLES: player1, player2, player3, player4, tournamentRound
document.getElementById('downloadProxy').addEventListener('click', function() {
    var name = '';
	if(player3 && player4 && player1 && player2)
		name = 'Mathchup ' + player1 + " & " + player3 + " vs " + player2 + " & " + player4 + "_" + tournamentRound + ".png";
	else if(player1 && player2)
		name = 'Matchup ' + player1 + " vs " + player2 + "_" + tournamentRound + ".png";
	else name = "Matchup.png";
	downloadCanvas(this, 'previewCanvas', name);
}, false);

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}