
//------------------------------------------------
/** GENERAL FUNCTIONS **/
function countCharacterDropdowns(){
	var sum = 0;
	$('.character_dropdown').each(function(){
		if($(this).val() != 'Choose One')
			sum++;
	});
	return sum;
}
function isSingles(){
	var ret = countCharacterDropdowns() > 2 ? false : true;
	return ret;
}
//------------------------------------------------


//------------------------------------------------
/** RETURN URL TO IMAGE **/
function getImagePath(char, side){
	if(side === 'right')
		return 'images/Melee/Thumbs/'+char+'Reverse.png'	
	return '/images/Melee/Thumbs/'+char+'.png';
	
}

function getNameplatesPath(plate){
	var path = '/images/nameplates/'
	return path+plate+'.png';
}
//------------------------------------------------


//------------------------------------------------
/** MISC **/
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.blah')
        .attr('src', e.target.result)
        .width(150)
        .height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
};

function getNameplateMidY(imgUrl, canvas, side){
	var img = new Image();
	img.src = imgUrl;
	var x = null;
	var y = null;
	var justify = null;
	if(side === 'left')
		x = nameplateX + 5;
	else if(side === 'right')
		x = nameplateDupX + img.width - 5;
	
	//y = nameplayteY + img.height;		
	
	//The following needs to programmatically find the nameplates	
	/** NAMEPLATES ON TOP **/
	y = 34;
	
	/** NAMEPLATES ON BOTTOM **/
	//y = canvas.height - 10;
	
	return {x:x, y:y};
};

var loadImageFromFile = function(input){
	background = new Image(); //8000 bits 100000
	var path = getElementById('bgImageFile').val;
}

var drawImageOnCanvas = function(canvas, image){
	var ctx = getCanvas(canvasId);
};

var removeImageFromCanvas = function(canvasId, image){
	var ctx = getCanvas(canvasId);	
};

var drawBackground = function(canvasId, image){
	var ctx = getCanvas(canvasId); 
	var fileReader = new FileReader(); 
	
};

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

function difference(a, b){
	if(a > b)
		return a - b;
	else return b - a;
};

/** SET THE NAMEPLATE DUPLICATION VARIABLE **/
$('duplicateNameplateCheck').change(function(){
	var checked = $(this).prop('checked');
	if(checked)
		duplicateNameplate = true;
	else
		duplicateNameplate = false;
	redrawCanvas();
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
//------------------------------------------------
