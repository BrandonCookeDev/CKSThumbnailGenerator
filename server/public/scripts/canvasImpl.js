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
var tournamentRound = null;
var tournamentRountFontSz = 60;
var tournamentRoundColor = null;
var tournamentLogo = null;
var gameLogo = null;
var streamLogo = null;
var playerFont = null;
var player1TextPt = {x: 10,	y: 300};
var player1TextSz = 33;
var player2TextPt = {x: 10,	y: 800};
var player2TextSz = 33;
var player3TextPt = {x: 10,	y: 800};
var player3TextSz = 33;
var player4TextPt = {x: 10,	y: 800};
var player4TextSz = 33;
var nameplateTextColor = null;
var tournamentDate = null;

var duplicateNameplate = false;

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
    	ctx.drawImage(tournamentLogo, (canvas.width/2 - tournamentLogo.width/2), tournamentLogo.height/2);
		//drawLogo(tournamentLogo, 'tourney');
	}
	if(gameLogo){
		drawLogo(gameLogo, 'game');
	}
	if(streamLogo){
		try{
			drawLogo(streamLogo, 'stream');
		}catch(err){
			console.log(err);
		}
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
	
	if(tournamentRound){
		
		//Draw rectangle container
		ctx.fillStyle = "grey";
		ctx.fillRect(0, canvas.height - 80, canvas.width, canvas.height);
		

		if(tournamentRoundColor)
			ctx.fillStyle = tournamentRoundColor;
		else ctx.fillStyle = 'white';

		//ctx.font='bold ' + String(tournamentRountFontSz)  + ' pt Impact';
		ctx.font = 'bold 50pt Georgia';
		ctx.textAlign='center';
		x = canvas.width/2
		y = canvas.height - 50 * (1/2) + 10;
		ctx.fillText(tournamentRound, x, y);		
	}
};

/** RETURN URL TO IMAGE **/
function getImagePath(char, side, isSingles){
	if(isSingles){
		if(side === 'right')
			return 'images/Melee/Thumbs/'+char+'Reverse.png'	
		return '/images/Melee/Thumbs/'+char+'.png';
	}
	else{
		if(side === 'right')
			return 'images/Melee/Thumbs/'+char+'ReverseDoubles.png'
		return '/images/Melee/Thumbs/'+char+'Doubles.png'
	}
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
        	//img.width = canvas.width;
        	//img.height = canvas.height;
        	tournamentLogo = img;
            redrawCanvas();
        	//ctx.drawImage(img,0,0, img.width, img.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
};
function handleStream(e){
	var canvas = document.getElementById('previewCanvas');
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
            x = (canvas.width / 2) - (img.width/2);
    		y = canvas.height - img.height;
        	ctx.drawImage(img, x, y);
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
	var width = 0, height = 0;
	var yDiff = 0, xDiff = 0;
	var reduce = .9;
	img.src = imgPath;
	img.onload = function(){	
		var coords = getCharacterCoordinates(canvas, img, charNumber);
		if(charNumber === 1)
			if(!isSingles()){
				width = img.width * reduce;
				height = img.height * reduce;
				yDiff = difference(img.height, height);
				ctx.drawImage(img, coords.x, coords.y + yDiff, width, height);
			}
			else
				ctx.drawImage(img, coords.x, coords.y);				
		else if(charNumber === 2){
			if(!isSingles()){
				width = img.width * reduce;
				height = img.height * reduce;
				xDiff = difference(img.width, width);
				yDiff = difference(img.height, height);
				ctx.drawImage(img, coords.x + xDiff, coords.y + yDiff, width, height);
			}
			else
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
		
		var temp = img.src;
		var imgRev = new Image();
		imgRev.src = temp.substring(0, temp.indexOf('.png')) + ' Reverse.png';
		
		/** NAMEPLATES AT TOP **/
		nameplateY = 0
		nameplateDupX = canvas.width - imgRev.width;
		nameplateDupY = 0;
		
		/** NAMEPLATES AT BOTTOM **/
		//nameplateY = canvas.height - img.height;
		//nameplateDupX = canvas.width - imgRev.width;
		//nameplateDupY = canvas.height - imgRev.height;
		
		ctx.drawImage(img, nameplateX, nameplateY );
		ctx.drawImage(imgRev, nameplateDupX, nameplateDupY);
	}
};

function drawLogo(logoUrl, type){
	var x, y;
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	var img = new Image();
	img.src = logoUrl;
	if(type === 'game'){
		gameLogo = img.src;
		x = canvas.width/2;
		y = canvas.height/5;
	}
	else if(type === 'tourney'){
		tournamentLogo = img.src;
		x = canvas.width/2;
		y = canvas.height / 2;
	}
	else if(type === 'stream'){
		img.width = 150;
		img.height = 120;
		streamLogo = img.src;
		
		/** LOGO AT THE TOP **/
		x = (canvas.width / 2) - (img.width/2);
		y = -10; //img.height;
		
		/** LOGO AT THE BOTTOM **/
		//x = (canvas.width / 2) - (img.width/2);
		//y = canvas.height - img.height;
	}
	img.onload = function(){
		ctx.drawImage(img, x, y, img.width, img.height);
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
	
	//The following needs to programmatically find the nameplates	
	/** NAMEPLATES ON TOP **/
	y = 34;
	
	/** NAMEPLATES ON BOTTOM **/
	//y = canvas.height - 10;
	
	
	return {x:x, y:y};
};

document.getElementById('downloadBtn').addEventListener('click', function(){
	document.getElementById('downloadProxy').click();
});

document.getElementById('downloadProxy').addEventListener('click', function() {
    var name = '';
	if(player3 && player4 && player1 && player2)
		name = 'Mathchup ' + player1 + " & " + player3 + " vs " + player2 + " & " + player4 + ".png";
	else if(player1 && player2)
		name = 'Matchup ' + player1 + " vs " + player2 + ".png";
	else name = "Matchup.png";
	downloadCanvas(this, 'previewCanvas', name);
}, false);

/** Download Canvas **/
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

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
}

