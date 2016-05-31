'use strict';

/**
 * @ngdoc overview
 * @name clamorApp
 * @description
 * # clamorApp
 *
 * Main module of the application.
 */
angular.module('clamorApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/search/:query', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl',
                controllerAs: 'searchResults'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
