var canvas = null;
var p1x = null; var p1y = 50;
var p2x = null; var p2y = 50;
var p3x = null; var p3y = 50;
var p4x = null; var p4y = 50;

var xOffset1 = 50;
var xOffset2 = 120;
var yOffset = 15;

var getCharacterCoordinates = function(canvas, image, characterNumber, isSingles){
	this.canvas = canvas;
	switch(characterNumber){
	case 1:
		if(isSingles){
			p1x = (canvas.width * 1/4) - image.width;//- image.width - xOffset;
			p1y = canvas.height - image.height + yOffset;
		}
		else{
			p1x = (canvas.width/2) - (image.width) - xOffset1;
			p1y = canvas.height - image.height + yOffset;
		}
		return {x:p1x, y:p1y};
	case 2:
		if(isSingles){
			p2x = canvas.width * (3/4) - image.width/2;// + image.width ;// - xOffset;//- image.width;
			p2y = canvas.height - image.height + yOffset;	
		}
		else{
			p2x = canvas.width/2 + xOffset1;
			p1y = canvas.height - image.height + yOffset;
		}
		return {x:p2x, y:p2y};
	case 3:
		p3x = 0;
		p3y = canvas.height - image.height + yOffset;
		return {x:p3x, y:p3y};
	case 4:
		p4x = canvas.width - image.width;
		p4y = canvas.height - image.height + yOffset;
		return {x:p4x, y:p4y};
	default:
		throw new Exception('charcter numer beyone 4');
	}
}