Codaemon.controller("MainCntrl",['$scope','$rootScope','$http','$location','NgTableParams','SearchService','ngProgressFactory',
		 function($scope,$rootScope,$http,$location,NgTableParams,SearchService,ngProgressFactory){
	
	
	$scope.isSearch = false;
	$scope.userList = [];
	$scope.user = {};
	
	$scope.url = 'https://data.cityofnewyork.us/resource/5scm-b38n.json';
	
	
	$scope.searchUser = function(formData){

		$scope.filter = "";	
		$scope.isSearch = true; 
		
		var elem = document.getElementById("myBar");   
		  var width = 1;
		  var id = setInterval(frame, 25);
		  function frame() {
		   
			  /*Check if progress bar width s=is equal to 100 then start displaying result*/
			  if (width >= 100) {
		    	
			    	/* Prepare url for all search criterias */
			    	if($scope.user.firstName && !$scope.user.lastName){
						$scope.filter = "";
						$scope.filter = "?first_name=" +$scope.user.firstName;
					}else if($scope.user.lastName && !$scope.user.firstName){
						$scope.filter = "";
						$scope.filter = "?last_name=" +$scope.user.lastName;
					} if($scope.user.lastName && $scope.user.firstName){
						$scope.filter = "";
						$scope.filter =  "?first_name=" +$scope.user.firstName + "&last_name=" + $scope.user.lastName;
					}  
				
					$scope.fetchUser($scope.url+$scope.filter);
					
					clearInterval(id);
		    } else {
		      width++; 
		      document.getElementById("myBar").style.width = width + '%'; 
		    }
		  }

		
		
		
	}
	
	
	$scope.fetchUser = function(url){
		
			SearchService.fetchAllUsers(url).success(function(result){
			
				$scope.userList = result;
				$scope.tableParams = $scope.createUsingFullOptions();
				
				$(".bar").hide("hideProgressBar",function(){
					$scope.isSearch = false;
				});
				 
			
			}, function() {
				notify("error", "Failed to fetch Users");
			});
			
	  }
	
	
	$scope.createUsingFullOptions = function() {
		
		var initialParams = {
			count: 10 // initial page size
		};
		var initialSettings = {
			counts: [],
			paginationMaxBlocks: 3,
			paginationMinBlocks: 2,
			
			dataset: $scope.userList,
		};
		return new NgTableParams(initialParams, initialSettings);
	}
	
	
}]);