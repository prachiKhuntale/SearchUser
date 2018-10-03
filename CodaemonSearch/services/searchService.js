Codaemon.factory('SearchService', ['$http', '$rootScope', function($http, $rootScope) {

 	var searchService = {};
 	
 	searchService.fetchAllUsers = function(url) {
        return $http.get(url, {headers: 'text/plain'});
  	};

  	return searchService;

 }]);