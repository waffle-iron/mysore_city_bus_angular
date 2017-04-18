'use strict';

/**
 * @ngdoc overview
 * @name mysoreCityBusAngularApp
 * @description
 * # mysoreCityBusAngularApp
 *
 * Main module of the application.
 */
angular
  .module('mysoreCityBusAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
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
