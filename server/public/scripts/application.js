var app = angular.module('MatchupPictureGen', []);

app.controller("MainCtrl", ['$scope', function($scope){
	$scope.characters = [
	    'Fox', 'Falco', 'Marth', 'Sheik', 'Jigglypuff', 'Peach',
	    'Ice Climbers', 'Captain Falcon', 'Pikachu', 'Samus', 'Dr. Mario',
	    'Yoshi', 'Luigi', 'Ganon', 'Mario', 'Young Link', 'Donkey Kong', 
	    'Link', 'Mr. Game & Watch', 'Roy', 'Mewtwo', 'Zelda', 'Ness', 'Pichu',
	    'Bowser', 'Kirby'
	];
	
	$scope.player1 = '';
	$scope.character1 = '';
	
	$scope.player2 = '';
	$scope.character2 = '';	
	
	$scope.appendExtension = function(name){
		return name + '.png';
	}
}]);