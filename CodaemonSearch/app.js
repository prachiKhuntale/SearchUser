var Codaemon = angular.module('Codaemon',['ngRoute','ngTable','ngProgress']);

Codaemon.config(['$routeProvider', function($routeProvider){ 
	
		$routeProvider
			.when('/',{
				templateUrl:'partials/search.html'	
			})
			.when('/search',{
				templateUrl:'partials/search.html'
			})
			.when('/aboutUs',{
				templateUrl:'partials/aboutUs.html'
			})
			.otherwise({
				redirectTo:'/'
		});
	
		
		
		
		Codaemon.directive('ngProgress', ["$window", "$rootScope", function ($window, $rootScope) {
	        var directiveObj = {
	            // Replace the directive
	            replace: true,
	            // Only use as a element
	            restrict: 'E',
	            link: function ($scope, $element, $attrs, $controller) {
	                // Watch the count on the $rootScope. As soon as count changes to something that
	                // isn't undefined or null, change the counter on $scope and also the width of
	                // the progressbar. The same goes for color and height on the $rootScope
	                $scope.$watch('count', function (newVal) {
	                    if (newVal !== undefined || newVal !== null) {
	                        $scope.counter = newVal;
	                        $element.eq(0).children().css('width','800px !important');
	                    }
	                });
	                $scope.$watch('color', function (newVal) {
	                    if (newVal !== undefined || newVal !== null) {
	                        $scope.color = newVal;
	                        $element.eq(0).children().css('background-color', newVal);
	                        $element.eq(0).children().css('color', newVal);
	                    }
	                });
	                $scope.$watch('height', function (newVal) {
	                    if (newVal !== undefined || newVal !== null) {
	                        $scope.height = newVal;
	                        $element.eq(0).children().css('height', newVal);
	                    }
	                });
	            },
	            // The actual html that will be used
	            template: '<div id="ngProgress-container"><div id="ngProgress"></div></div>'
	        };
	        return directiveObj;
	    }]);
		
}])