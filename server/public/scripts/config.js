var p1x = 50; var p1y = 50;
var p2x = 50; var p2y = 50;
var p3x = 30; var p3y = 30;
var p4x = 50; var p4y = 50;

var getCharacterCoordinates = function(characterNumber){
	switch(characterNumber){
	case 1:
		return {x:p1x, y:p1y};
	case 2:
		return {x:p2x, y:p2y};
	case 3:
		return {x:p3x, y:p3y};
	case 4:
		return {x:p4x, y:p4y};
	default:
		throw new Exception('charcter numer beyone 4');
	}
}