
//------------------------------------------------
/** EVENT LISTENERS FOR DROPDOWNS **/
$('#player1CharacterDropdown').change(function(){
	var char = $(this);
	if(char.val() === 'Choose One') {
		char1url = null;
		redrawCanvas();
	}
	else{
		char1url = getImagePath(char.val().replace(" ", ""), null, true);
		redrawCanvas();
	}
});

$('#player2CharacterDropdown').change(function(){
	var char = $(this);
	if(char.val() === 'Choose One') {
		char2url = null;
		redrawCanvas();
	}
	else{
		char2url = getImagePath(char.val().replace(" ", ""), 'right', true);	
		redrawCanvas();
	}
});

$('#player3CharacterDropdown').change(function(){
	var char = $(this);
	if(char.val() === 'Choose One') {
		char3url = null;
		redrawCanvas();
	}
	else{
		char3url = getImagePath(char.val().replace(" ", ""), true);
		redrawCanvas();
	}
});

$('#player4CharacterDropdown').change(function(){
	var char = $(this);
	if(char.val() === 'Choose One') {
		char4url = null;
		redrawCanvas();
	}
	else{
		char4url = getImagePath(char.val().replace(" ", ""), 'right', true);
		redrawCanvas();
	}
});
//------------------------------------------------