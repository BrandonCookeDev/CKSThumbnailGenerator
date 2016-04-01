/** SET THE TOURNAMENT ROUND ON CHANGE **/
$('#tournamentRoundText').on('input', function(){
	tournamentRound = $(this).val();
});

tournamentRound = $('#tournamentRoundText').val();

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


/** DEFAULTS **/
$('#defaultPlatesBtn').click(function(){
	var path = getNameplatesPath('Default Nameplate');
	nameplateUrl = path;
	drawNameplate(path, true);
});

$('#defaultStreamLogoBtn').click(function(){
	var path = getNameplatesPath('cks');
	streamLogo = path;
	drawLogo(path, 'stream');
});

/** CHANGE TEXT COLOR **/
$('#nameplateTextColor').on('input', function(){
	nameplateTextColor = $(this).val();
});

$('#roundColor').on('input', function(){
	tournamentRoundColor = $(this).val();
});

/** COLOR PICKER CHANGES **/
$('#nameplateTextColor').change(function(){
	rewriteCanvas();
});

$('#roundColor').change(function(){
	rewriteCanvas();
});

$('#defaultStreamLogo').click(function(){
	var canvas = document.getElementById('previewCanvas');	
	streamLogo = '/images/stream/cks.png';
	drawLogo(streamLogo, 'stream', canvas);
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
		char2url = getImagePath(char.val().replace(" ", ""), 'right');	
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
		char4url = getImagePath(char.val().replace(" ", ""), 'right');
		redrawCanvas();
	}
});

/** WRITE PLAYERS NAMES **/
$('#submitTextBtn').click('input', function(){
	rewriteCanvas();
});


$('#tournamentLogoFile').change(function(e) {
    var file = e.target.files[0],
        imageType = /image.*/;

    if (!file.type.match(imageType))
        return;

    var reader = new FileReader();
    reader.onload = fileOnload;
    reader.readAsDataURL(file);        
});

function fileOnload(e) {
    var $img = $('<img>', { src: e.target.result });
    var canvas = $('#previewCanvas')[0];
    var context = canvas.getContext('2d');

    $img.load(function() {
        context.drawImage(this, canvas.width/2 + $img.width/2, canvas.height*(3/4));
    });
}

/** DOWNLOAD PICTURE **/
//$('#downloadBtn').click(function(){
//	var dataUrl = $('#previewCanvas').toDataUrl('image/png');
	
//});

/*
$('#defaultStreamLogo').click(function(){
	var canvas = document.getElementById('previewCanvas');
	drawLogo('/images/stream/cks.png', 'stream', canvas);
});
*/