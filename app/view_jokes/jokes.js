'use strict';

angular.module('myApp.jokes', [])
 
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('jokes', {
    url: '/jokes',
    views: {
      'jokesContent': {
        templateUrl: "view_jokes/jokes.html",
    	controller: 'JokesCtrl as jokes'
      }
    }
  })
}])
 
.controller('JokesCtrl', ['$http', '$auth', '$rootScope','$state', '$q' , function($http, $auth, $rootScope, $state, $q) {
 
  var vm = this;
        
  vm.jokes = [];
  vm.error;
  vm.joke;
 
  $http.get('http://localhost:8000/api/v1/jokes').success(function(jokes){    
    console.log(jokes);
    vm.jokes = jokes.data;
    }).error(function(error){
      vm.error = error;
    })
 
  // vm.init();
 
}]);