'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // 'ngRoute',
  'ui.router',
  'myApp.jokes',
  'myApp.view2',
  'myApp.auth',
  'myApp.version',
   'satellizer',
   'permission'
])


.run(function (Permission, $rootScope, $state, $auth) {
	$rootScope.logout = function() {
        $auth.logout().then(function() {
            localStorage.removeItem('user');
            $rootScope.currentUser = null;
            $state.go('auth');
        });
    }
    $rootScope.currentUser = JSON.parse(localStorage.getItem('user'));


	Permission 
     .defineRole('isloggedin', function (stateParams) {
        // If the returned value is *truthy* then the user has the role, otherwise they don't
        // console.log("isloggedin ", $auth.isAuthenticated()); 
        if ($auth.isAuthenticated()) {
          return true; // Is loggedin
        }
        return false;
      })
})
.config(['$stateProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $urlRouterProvider, $authProvider) {
 
	$authProvider.loginUrl = 'http://localhost:8000/api/v1/authenticate';
	$urlRouterProvider.otherwise('/auth');
}]);
