/** CHANGE TEXT COLOR **/
$('#nameplateTextColor').on('input', function(){
	nameplateTextColor = $(this).val();
});

$('#roundColor').on('input', function(){
	tournamentRoundColor = $(this).val();
});

/** COLOR PICKER CHANGES **/
$('#nameplateTextColor').change(function(){
	nameplateTextColor = $(this).val();
	rewriteCanvas();
});

$('#roundColor').change(function(){
	tournamentRoundColor = $(this).val();
	rewriteCanvas();
});