var canvas = null;
var p1x = 0; var p1y = 50;
var p2x = null; var p2y = 50;
var p3x = 20; var p3y = 30;
var p4x = null; var p4y = 30;

var getCharacterCoordinates = function(canvas, image, characterNumber){
	this.canvas = canvas;
	switch(characterNumber){
	case 1:
		return {x:p1x, y:p1y};
	case 2:
		p2x = canvas.width - image.width;
		return {x:p2x, y:p2y};
	case 3:
		return {x:p3x, y:p3y};
	case 4:
		p4x = canvas.width - image.width - 20;
		return {x:p4x, y:p4y};
	default:
		throw new Exception('charcter numer beyone 4');
	}
}