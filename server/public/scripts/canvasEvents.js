/** SET THE TOURNAMENT DATE **/

/** SET THE NAMEPLATE DUPLICATION VARIABLE **/
$('duplicateNameplateCheck').change(function(){
	var checked = $(this).prop('checked');
	if(checked)
		duplicateNameplate = true;
	else
		duplicateNameplate = false;
	redrawCanvas();
});

$('#tournamentLogoFile').change(function(e) {
    var file = e.target.files[0],
        imageType = /image.*/;

    if (!file.type.match(imageType))
        return;

    var reader = new FileReader();
    reader.onload = fileOnload;
    reader.readAsDataURL(file);        
});

function fileOnload(e) {
    var $img = $('<img>', { src: e.target.result });
    var canvas = $('#previewCanvas')[0];
    var context = canvas.getContext('2d');

    $img.load(function() {
        context.drawImage(this, canvas.width/2 + $img.width/2, canvas.height*(3/4));
    });
}