'use strict';

var requestHead = 'http://api.bandsintown.com/artists/',
	requestTail = '/events.json?api_version=2.0&app_id=CLAMOR';

var details = false,
	showIndex = 0;

/**
 * @ngdoc function
 * @name clamorApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the clamorApp
 */
angular.module('clamorApp')
    .controller('SearchCtrl', function($scope, $http, $routeParams) {
        $scope.query = $routeParams.query;
        var request = requestHead + $scope.query + requestTail;
        $http.jsonp(request + '&callback=JSON_CALLBACK')
            .success(function(results) {
                $scope.results = results;
                console.log(results, $scope.query);
            });

        $scope.showDetails = function (index) {
        	details = true;
        	// $location.search({id:id});
        	showIndex = index;
        	console.log($scope.results[showIndex]);
        };
    });
