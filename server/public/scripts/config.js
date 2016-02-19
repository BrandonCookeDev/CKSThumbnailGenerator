var p1x = 50; var p1y = 50;
var p2x = 50; var p2y = 50;
var p3x = 50; var p3y = 50;
var p4x = 50; var p4y = 50;

var getCharacterCoordinates = function(characterNumber){
	switch(characterNumber){
	case 1:
		return {x:p1x, y:p1y};
	case 2:
		break;
	case 3:
		break;
	case 4:
		break;
	default:
		throw new Exception('charcter numer beyone 4');
	}
}