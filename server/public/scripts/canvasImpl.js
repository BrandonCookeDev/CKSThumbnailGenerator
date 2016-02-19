var background = null;
var char1url = null;
var char2url = null;
var char3url = null;
var char4url = null;
var name1str = null;
var name2str = null;
var nameplateUrl = null;
var nameplateX = null;
var nameplateY = null;
var nameplateDupX = null;
var nameplateDupY = null;
var player1 = null;
var player2 = null;
var player3 = null;
var player4 = null;
var tournamentLogo = null;
var gameLogo = null;
var streamLogo = null;

var duplicateNameplate = false;

/** REDRAW THE IMAGE **/
function redrawCanvas(){
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	
	if(background){
		background.width = canvas.width;
		background.height = canvas.height;
	    ctx.drawImage(background,0,0, background.width, background.height);		
	}
	if(char3url){
		drawCharacter(char3url, 3);
	}
	if(char4url){
		drawCharacter(char4url, 4);		
	}
	if(char1url){
		drawCharacter(char1url, 1);		
	}
	if(char2url){
		drawCharacter(char2url, 2);
	}
	if(nameplateUrl){
		var nameplate = drawNameplate(nameplateUrl);
		drawNameplate(nameplate, duplicateNameplate);
	}
	if(player1){
		if(nameplateUrl){
			
		}
	}
	if(player2){
		
	}
	if(player3){
		
	}
	if(player4){
		
	}
	if(tournamentLogo){
		
	}
	if(gameLogo){
		
	}
	if(streamLogo){
		
	}
};

/** RETURN URL TO IMAGE **/
function getImagePath(char){
	return '/images/Melee/Thumbs/'+char+'.png';
}
function getNameplatesPath(plate){
	var path = '/images/nameplates/'
	return path+plate+'.png';
}

/** RETURN THE CONTEXT OF THE CAVAS BELONGING TO THE ID **/
function getCanvas(canvasId){
	var canvas = document.getElementById(canvasId),
	context = canvas.getContext('2d');
	return context;
};

/** LOAD IMAGE TO CANVAS **/
var imageLoader = document.getElementById('bgImageFile');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e){
	var ctx = getCanvas('previewCanvas');
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
        	var canvas = document.getElementById('previewCanvas');
        	img.width = canvas.width;
        	img.height = canvas.height;
        	background = img;
            ctx.drawImage(img,0,0, img.width, img.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
};


/** EVENT LISTENERS FOR DROPDOWNS **/
$('#player1CharacterDropdown').change(function(){
	var char = $(this);
	if(char.val() === 'Choose One') {
		char1url = null;
		return;
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
		return;
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
		return;
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

/** DRAW CHARACTER OR NAMEPLATE ONTO CANVAS **/
function drawCharacter(imgPath, charNumber){
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	var img = new Image();
	img.src = imgPath;
	img.onload = function(){	
		var coords = getCharacterCoordinates(charNumber);
		if(charNumber === 1)
			ctx.drawImage(img, coords.x, coords.y);				
		else if(charNumber === 2)
			ctx.drawImage(img, canvas.width - img.width - 50, canvas.height - img.height - 50);			
		else if(charNumber === 3)
			ctx.drawImage(img, 100, 100);				
		else if(charNumber === 4)
			ctx.drawImage(img, canvas.width - img.width - 100, canvas.height - img.height - 100);
	}
};

function drawNameplate(imgPath, duplicate){
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	var img = new Image();
	img.src = imgPath;
	img.onload = function(){
		nameplateX = 0
		nameplateY = canvas.height - 100;
		ctx.drawImage(img, nameplateX, nameplateY);
		if(duplicate){
			nameplateDupX = canvas.width - img.width - 100;
			nameplateDupY = canvas.height - 100
			ctx.drawImage(img, nameplateDupX, nameplateDupY);
		}
	}
};


function drawPlayerName(text, x, y, color){
	var ctx = getCanvas('previewCanvas');
	//if(color)
	//	var gradient.addColorStop("0". )
	ctx.fillText(text, x, y);
};

/** END DRAW CHARACTERS AND NAMEPLATES **/

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
	redrawCanvas();
});

$('#player2Textbox').on('input',function(){
	player2 = $(this).val();
	redrawCanvas();
});

$('#player3Textbox').on('input',function(){
	player3 = $(this).val();
	redrawCanvas();
});

$('#player4Textbox').on('input',function(){
	player4 = $(this).val();
	redrawCanvas();
});


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
}




var loadImageFromFile = function(input){
	background = new Image();
	var path = getElementById('bgImageFile').val;
	//background.src = 
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

