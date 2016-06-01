function constructor(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y){
	this.p1x = p1x;
	this.p1y = p1y;
	
	this.p2x = p2x;
	this.p2y = p2y;
	
	this.p3x = p3x;
	this.p3y = p3y;
	
	this.p4x = p4x;
	this.p4y = p4y;
}

var canvas = null;
var p1x = null; var p1y = 50;
var p2x = null; var p2y = 50;
var p3x = null; var p3y = 50;
var p4x = null; var p4y = 50;

var xOffset = 120;
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
			
		}
		return {x:p1x, y:p1y};
	case 2:
		if(isSingles){
			p2x = canvas.width * (3/4) - image.width/2;// + image.width ;// - xOffset;//- image.width;
			p2y = canvas.height - image.height + yOffset;			
		}
		else{
			
		}
		return {x:p2x, y:p2y};
	case 3:
		p3x = -1 * xOffset;
		p3y = canvas.height - image.height + yOffset;
		return {x:p3x, y:p3y};
	case 4:
		p4x = canvas.width - image.width + xOffset;
		p4y = canvas.height - image.height + yOffset;
		return {x:p4x, y:p4y};
	default:
		throw new Exception('charcter numer beyone 4');
	}
}