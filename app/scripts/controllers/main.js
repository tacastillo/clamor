'use strict';

/**
 * @ngdoc function
 * @name clamorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clamorApp
 */
angular.module('clamorApp').controller('MainCtrl', function($scope, $http, $location) {
    $scope.searchQuery = '';
    $scope.search = function() { $location.path('/search/' + this.searchQuery); };
});
