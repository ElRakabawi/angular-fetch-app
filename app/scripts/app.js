'use strict';

/**
 * @ngdoc overview
 * @name angularFetchAppApp
 * @description
 * # angularFetchAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularFetchAppApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
