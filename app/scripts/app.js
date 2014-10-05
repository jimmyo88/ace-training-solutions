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
        templateUrl: 'views/main.html',
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
            templateUrl: 'views/auth.html',
            controller: 'LoginController',
            resolve: {
                auth: function ($q, authenticationSvc) {
                    var userInfo = authenticationSvc.getUserInfo();
                    if (userInfo) {
                        return $q.when(userInfo);
                    } else {
                        return $q.reject({ authenticated: false });
                    }
                }
            }
        })
        .when('/login', {
            templateUrl: 'views/auth.html',
            controller: 'LoginController'
        })
        .otherwise({
            redirectTo: '/'
        })
});

angular.module('aceTrainingApp').directive('disableAnimation', function($animate){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $attrs.$observe('disableAnimation', function(value){
                $animate.enabled(!value, $element);
            });
        }
    };
});

angular.module('aceTrainingApp').run(["$rootScope", "$location", function($rootScope, $location) {


    $rootScope.$on("$routeChangeSuccess", function(userInfo) {
        console.log(userInfo);
    });

    $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
        if (eventObj.authenticated === false) {
            $location.previousUrl = $location.hash;
            $location.path("/login");

        }
    });
}]);
