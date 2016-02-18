var app = angular.module('MatchupPictureGen', []);

app.controller("MainCtrl", ['$scope', function($scope){
	$scope.characters = [
	    'Mario','Luigi','Bowser','Peach'
	];
}]);