var app = angular.module('MatchupPictureGen', []);

var getFilePath = function(name){
	return '/images/Melee/Thumbs/' + name + '.png';
}

app.controller("MainCtrl", ['$scope', function($scope){
	$scope.characters = ['Choose One',
	    'Fox', 'Falco', 'Marth', 'Sheik', 'Jigglypuff', 'Peach',
	    'Ice Climbers', 'Captain Falcon', 'Pikachu', 'Samus', 'Dr Mario',
	    'Yoshi', 'Luigi', 'Ganon', 'Mario', 'Young Link', 'Donkey Kong', 
	    'Link', 'Mr. Game & Watch', 'Roy', 'Mewtwo', 'Zelda', 'Ness', 'Pichu',
	    'Bowser', 'Kirby'
	];
	
	$scope.player1 = null;
	$scope.character1 = null;	
	
	$scope.player2 = null;
	$scope.character2 = null;
	
}]);


