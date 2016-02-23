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
var playerFont = null;
var player1TextPt = {x: 10,	y: 300};
var player1TextSz = 35;
var player2TextPt = {x: 10,	y: 800};
var player2TextSz = 35;
var player3TextPt = {x: 10,	y: 800};
var player3TextSz = 35;
var player4TextPt = {x: 10,	y: 800};
var player4TextSz = 35;
var nameplateTextColor = null;

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

	if(tournamentLogo){
		drawLogo(tournamentLogo, 'tourney', canvas);
	}
	if(gameLogo){
		drawLogo(gameLogo, 'game', canvas);
	}
	if(streamLogo){
		drawLogo(streamLogo, 'stream', canvas);
	}
};

function rewriteCanvas(){
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	var side = 'left';
	var pt = null;
	
	if(player3){
		if(nameplateUrl){
			var side = 'left';
			var pt = getNameplateMidY(nameplateUrl, canvas, side);
			drawText(player3, pt.x, pt.y, nameplateTextColor, side);
		}
		else{
			drawText(player3, player3TextPt.x, player3TextPt.y, nameplateTextColor);
		}
	}
	if(player4){
		if(nameplateUrl){
			side = 'right';
			pt = getNameplateMidY(nameplateUrl, canvas, side);
			drawText(player4, pt.x, pt.y, nameplateTextColor, side);
		}
		else{
			drawText(player4, player4TextPt.x, player4TextPt.y, nameplateTextColor);
		}
	}
	if(player1){
		if(nameplateUrl){
			var side = 'left';
			var pt = getNameplateMidY(nameplateUrl, canvas, side);
			drawText(player1, pt.x, pt.y, nameplateTextColor, side);
		}
		else{
			drawText(player1, player1TextPt.x, player1TextPt.y, nameplateTextColor);
		}
	}
	if(player2){
		if(nameplateUrl){
			side = 'right';
			pt = getNameplateMidY(nameplateUrl, canvas, side);
			drawText(player2, pt.x, pt.y, nameplateTextColor, side);
		}
		else{
			drawText(player2, player2TextPt.x, player2TextPt.y, nameplateTextColor);
		}
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
imageLoader.addEventListener('change', handleBackground, false);

function handleBackground(e){
	var ctx = getCanvas('previewCanvas');
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
        	var canvas = document.getElementById('previewCanvas');
        	img.width = canvas.width;
        	img.height = canvas.height;
        	background = img;
            redrawCanvas();
        	//ctx.drawImage(img,0,0, img.width, img.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
};

function handleTourney(e){
	var ctx = getCanvas('previewCanvas');
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
        	var canvas = document.getElementById('previewCanvas');
        	img.width = canvas.width;
        	img.height = canvas.height;
        	tournamentLogo = img;
            redrawCanvas();
        	//ctx.drawImage(img,0,0, img.width, img.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
};

function handleStream(e){
	var ctx = getCanvas('previewCanvas');
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
        	var canvas = document.getElementById('previewCanvas');
        	img.width = canvas.width;
        	img.height = canvas.height;
        	streamLogo = img;
            redrawCanvas();
        	//ctx.drawImage(img,0,0, img.width, img.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
};

function handleGame(e){
	var ctx = getCanvas('previewCanvas');
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
        	var canvas = document.getElementById('previewCanvas');
        	img.width = canvas.width;
        	img.height = canvas.height;
        	gameLogo = img;
            redrawCanvas();
        	//ctx.drawImage(img,0,0, img.width, img.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
};

/** DRAW CHARACTER OR NAMEPLATE ONTO CANVAS **/
function drawCharacter(imgPath, charNumber){
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	var img = new Image();
	img.src = imgPath;
	img.onload = function(){	
		var coords = getCharacterCoordinates(canvas, img, charNumber);
		if(charNumber === 1)
			ctx.drawImage(img, coords.x, coords.y);				
		else if(charNumber === 2){
			
			//ctx.scale(-1, 1);
			ctx.drawImage(img, coords.x, coords.y);
		}
		else if(charNumber === 3)
			ctx.drawImage(img, coords.x, coords.y);				
		else if(charNumber === 4)
			ctx.drawImage(img, coords.x, coords.y);
	}
};

function drawNameplate(imgPath, duplicate){
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	var img = new Image();
	img.src = imgPath;
	img.onload = function(){
		nameplateX = 0
		nameplateY = canvas.height - img.height;
		
		var temp = img.src;
		var imgRev = new Image();
		imgRev.src = temp.substring(0, temp.indexOf('.png')) + ' Reverse.png';
		nameplateDupX = canvas.width - imgRev.width;
		nameplateDupY = canvas.height - imgRev.height;
		
		ctx.drawImage(img, nameplateX, nameplateY );
		ctx.drawImage(imgRev, nameplateDupX, nameplateDupY);
	}
};

function drawLogo(logoUrl, type, canvas){
	var x, y;
	
	if(logoUrl){
		if(type === 'game'){
			x = canvas.width/2;
			y = canvas.height/5;
		}
		else if(type === 'tourney'){
			x = canvas.width/2;
			y = canvas.height / 2;
		}
		else if(type === 'stream'){
			x = canvas.width / 2;
			y = canvas.height - 50;
		}
	}
};

function drawText(text, x, y, color, side){
	var ctx = getCanvas('previewCanvas');	
	ctx.fillStyle = color;
	ctx.font="bold " + String(player1TextSz) + 'pt Arial';
	if(side === 'right')
		ctx.textAlign='right';
	else
		ctx.textAlign='left';
	ctx.fillText(text, x, y);
};

/** END DRAW CHARACTERS AND NAMEPLATES **/

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
	
	y = canvas.height - 5;
	
	return {x:x, y:y};
};

var loadImageFromFile = function(input){
	background = new Image();
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

