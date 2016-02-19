var background = null;

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
}

/** END LOAD IMAGE TO CANVAS **/

/** PAINT CHARACTER ON CANVAS **/
function getImagePath(char){
	return '/images/Melee/Thumbs/'+char+'.png';
}

$('#player1CharacterDropdown').change(function(){
	var char = $(this);
	//var char = $('option:selected', this)
	drawCharacter(getImagePath(char.val()), 1);
});

$('#player2CharacterDropdown').on('change', function(e){
	var char = $('option:selected', this)
	drawCharacter(getImagePath(char.val()), 2);
});

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
			ctx.drawImage(img, canvas.width - 50, canvas.height - 50);			
		else if(charNumber === 3)
			ctx.drawImage(img, 100, 100);				
		else if(charNumber === 4)
			ctx.drawImage(img, 100, 100);
	}
}




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

