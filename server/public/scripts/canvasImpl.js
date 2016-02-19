var background = null;

function getCanvas(canvasId){
	var canvas = document.getElementById(canvasId),
	context = canvas.getContext('2d');
	return context;
};

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

var imageLoader = document.getElementById('bgImageFile');
imageLoader.addEventListener('change', handleImage, false);

/*
var input = document.getElementById('previewCanvas');
input.onchange = function(e) { 
	  var test = "";
	  handleImage(e);
};
*/

function handleImage(e){
	var ctx = getCanvas('previewCanvas');
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
        	var canvas = document.getElementById('previewCanvas');
            //canvas.width = img.width;
            //canvas.height = img.height;
        	img.width = canvas.width;
        	img.height = canvas.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
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

