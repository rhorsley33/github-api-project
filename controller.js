var app = angular.module('github-api');
app.controller('GitHubController', function($scope, GitHubService){
	$scope.getUserData = function(){
		GitHubService.getUser($scope.searchText).then(function(res){
			console.log(res)
		$scope.user = res.data;	
		})
		
	}

});

