var app = angular.module('github-api');
app.service('GitHubService', function($http){
  var id = "2dc82fed067698eee50e";
  var sec = "d2ba801f1c9a4d4441a5cc4115b7dcf8abff26c0";
  var param = "?client_id=" + id + "&client_secret=" + sec;

  this.getUser = function(username){
  		return $http({
  		method: 'GET',
  		url: 'https://api.github.com/users/' + username
  	})

  }


});





/// Client ID 
/// 2dc82fed067698eee50e


/// Client Secret 	
/// d2ba801f1c9a4d4441a5cc4115b7dcf8abff26c0