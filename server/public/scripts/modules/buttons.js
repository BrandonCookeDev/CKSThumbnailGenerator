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

$('#defaultStreamLogo').click(function(){
	var canvas = document.getElementById('previewCanvas');	
	streamLogo = '/server/images/stream/cksbold.png';
	drawLogo(streamLogo, 'stream', canvas);
});


/** WRITE PLAYERS NAMES **/
$('#submitTextBtn').click('input', function(){
	rewriteCanvas();
});