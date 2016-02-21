
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

/** SET PALYER NAMES IN TEXT BOXES **/
$('#player1Textbox').change(function(){
	var box = $(this);
	player1 = box.val();
	redrawCanvas();
});

/** SET THE NAMEPLATE DUPLICATION VARIABLE **/
$('duplicateNameplateCheck').change(function(){
	var checked = $(this).prop('checked');
	if(checked)
		duplicateNameplate = true;
	else
		duplicateNameplate = false;
	redrawCanvas();
});

/** CHANGE PLAYER NAMES **/
$('#player1Textbox').on('input',function(){
	player1 = $(this).val();
	rewriteCanvas();
});

$('#player2Textbox').on('input',function(){
	player2 = $(this).val();
	rewriteCanvas();
});

$('#player3Textbox').on('input',function(){
	player3 = $(this).val();
	rewriteCanvas();
});

$('#player4Textbox').on('input',function(){
	player4 = $(this).val();
	rewriteCanvas();
});


$('#defaultPlatesBtn').click(function(){
	var path = getNameplatesPath('Default Nameplate');
	nameplateUrl = path;
	drawNameplate(path, true);
});

/** CHANGE TEXT COLOR **/
$('#nameplateTextColor').on('input', function(){
	nameplateTextColor = $(this).val();
});


/** EVENT LISTENERS FOR DROPDOWNS **/
$('#player1CharacterDropdown').change(function(){
	var char = $(this);
	if(char.val() === 'Choose One') {
		char1url = null;
		redrawCanvas();
	}
	else{
		char1url = getImagePath(char.val().replace(" ", ""));
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
		char2url = getImagePath(char.val().replace(" ", ""));	
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
		char3url = getImagePath(char.val().replace(" ", ""));
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
		char4url = getImagePath(char.val().replace(" ", ""));
		redrawCanvas();
	}
});
