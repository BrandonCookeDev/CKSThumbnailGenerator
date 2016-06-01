/** DEFAULTS **/
$('#defaultPlatesBtn').click(function(){
	var path = getNameplatesPath('Default Nameplate');
	nameplateUrl = path;
	drawNameplate(path, true);
});

/*
$('#defaultStreamLogoBtn').click(function(){
	var path = getNameplatesPath('cks');
	streamLogo = path;
	drawLogo(path, 'stream');
});
*/

$('#defaultStreamLogo').click(function(){
	var canvas = document.getElementById('previewCanvas');	
	streamLogo = '/server/images/stream/cksbold.png';
	drawLogo(streamLogo, 'stream', canvas);
});


/** WRITE PLAYERS NAMES **/
$('#submitTextBtn').click('input', function(){
	rewriteCanvas();
});

/** CLEAR TEXT **/
$('#clearTextBtn').click('input', function(){
	redrawCanvas();
});

/** LOAD FILE IMAGE **/
$('#tournamentLogoFile').change(function(e){
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	var URL = window.URL;
    var url = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.src = url;

    //var reader = new FileReader();
    //reader.readAsDataURL(e.target.files[0]);     

    img.onload = function() {

        img_width = img.width;
        img_height = img.height;

        drawLogo(img.src, 'tournament');
    }
});

$('#gameLogoFile').change(function(e){
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	var URL = window.URL;
    var url = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.src = url;


    img.onload = function() {

        img_width = img.width;
        img_height = img.height;

        drawLogo(img.src, 'game');
    }
});

$('#streamLogoFile').change(function(e){
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	var URL = window.URL;
    var url = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.src = url;


    img.onload = function() {

        img_width = img.width;
        img_height = img.height;

        drawLogo(img.src, 'stream');
    }
});