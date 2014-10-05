'use strict';

/**
 * @ngdoc overview
 * @name aceTrainingApp
 * @description
 * # aceTrainingApp
 *
 * Main module of the application.
 */
angular.module('aceTrainingApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap',
    'firebase'
  ]).config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'HomeController'
        })
        .when('/blog', {
            templateUrl: 'views/blog.html',
            controller: 'BlogController'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController',
            resolve: {
                auth: function ($q, AuthenticationService) {
                    var userInfo = AuthenticationService.getUserInfo();
                    if (userInfo) {
                        return $q.when(userInfo);
                    } else {
                        return $q.reject({ authenticated: false });
                    }
                }
            }
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .otherwise({
            redirectTo: '/'
        });
});


angular.module('aceTrainingApp').run(['$rootScope', '$location', function($rootScope, $location) {


    $rootScope.$on('$routeChangeSuccess', function(userInfo) {
        console.log(userInfo);
    });

    $rootScope.$on('$routeChangeError', function(event, current, previous, eventObj) {
        if (eventObj.authenticated === false) {
            $location.path('/login');

        }
    });
}]);
