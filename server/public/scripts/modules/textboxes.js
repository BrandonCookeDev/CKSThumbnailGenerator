//------------------------------------------------
/** SET THE TOURNAMENT ROUND ON CHANGE **/
$('#tournamentRoundText').on('input', function(){
	tournamentRound = $(this).val();
});
// LOCAL VARIABLE: tournamentRound
tournamentRound = $('#tournamentRoundText').val();
//------------------------------------------------


//------------------------------------------------
/** CHANGE PLAYER NAMES **/
$('#player1Textbox').on('input',function(){
	player1 = $(this).val();
	//redrawCanvas();
});

$('#player2Textbox').on('input',function(){
	player2 = $(this).val();
	//redrawCanvas();
});

$('#player3Textbox').on('input',function(){
	player3 = $(this).val();
	//redrawCanvas();
});

$('#player4Textbox').on('input',function(){
	player4 = $(this).val();
	//redrawCanvas();
});
//------------------------------------------------


//------------------------------------------------
/** SET CANVAS SIZE BOXES **/
$('#customWidthBox').val($('#previewCanvas').width());

$('#customWidthBox').change(function(){
	var box = $(this);
	$('#previewCanvas').width(box.val());
});

$('#customHeightBox').val($('#previewCanvas').height());

$('#customHeightBox').change(function(){
	var box = $(this);
	$('#previewCanvas').height(box.val());	
});
//------------------------------------------------