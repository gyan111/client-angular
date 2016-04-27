'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // 'ngRoute',
  'ui.router',
  'myApp.jokes',
  'myApp.view2',
  'myApp.auth',
  'myApp.version',
   'satellizer'
]).
 config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);