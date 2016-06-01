

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
		drawLogo(tournamentLogo, 'tournament');
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
		ctx.globalAlpha=0.7;
		ctx.fillStyle = "grey";
		ctx.fillRect(0, canvas.height - 80, canvas.width, canvas.height);
		ctx.globalAlpha=1.0;

		if(tournamentRoundColor)
			ctx.fillStyle = tournamentRoundColor;
		else ctx.fillStyle = 'white';

		//ctx.font='bold ' + String(tournamentRountFontSz)  + ' pt Impact';
		ctx.font = 'bold 50pt Arial';
		ctx.textAlign='center';
		x = canvas.width/2
		y = canvas.height - 50 * (1/2) + 10;
		ctx.fillText(tournamentRound, x, y);		
	}
};


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

/** NOT WORKING YET **/
function handleTourney(e){
	var ctx = getCanvas('previewCanvas');
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
        	var canvas = document.getElementById('previewCanvas');
        	tournamentLogo = img.src;
        	drawLogo(img.src, 'tournament');
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
	var enhance = 1.5;
	var reduce = .9;
	img.src = imgPath;
	img.onload = function(){
		height = img.height;
		width = img.width;
		
		if(enhance && isSingles()){
			height *= enhance;
			width *= enhance;
		}
		else{
			height *= reduce;
			width *= reduce;			
		}
		
		var coords = getCharacterCoordinates(canvas, img, charNumber, isSingles());
		if(charNumber === 1)
			ctx.drawImage(img, coords.x, coords.y, width, height);				
		else if(charNumber === 2){
			//ctx.scale(-1, 1);
			ctx.drawImage(img, coords.x, coords.y, width, height);
		}
		else if(charNumber === 3)
			ctx.drawImage(img, coords.x, coords.y, width, height);				
		else if(charNumber === 4)
			ctx.drawImage(img, coords.x, coords.y, width, height);
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
	if(logoUrl && logoUrl.includes('http://'))
		logoUrl = logoUrl.substring(streamLogo.indexOf('images/'));
	var x, y;
	var canvas = document.getElementById('previewCanvas');
	var ctx = getCanvas('previewCanvas');
	var img = new Image();
	img.src = logoUrl;
	if(type === 'game'){
		gameLogo = logoUrl;
		
		x = canvas.width/2;
		y = canvas.height/5;
	}
	else if(type === 'tournament'){
		tournamentLogo = logoUrl;
		
		x = canvas.width/2 - img.width/2;
		y = canvas.height/2 - img.height/2;
	}
	else if(type === 'stream'){
		streamLogo = logoUrl;
		
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




