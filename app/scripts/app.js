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
    'firebase',
    'angular-loading-bar'
  ]).config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        title: 'Ace Training Solutions'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'HomeController',
        title: 'About us'
    })
    .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogController',
        title: 'Our blog'
    })
    .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController',
        title: 'Add posts and edit your blog',
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
        controller: 'LoginController',
        title: 'Login'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController',
        title: 'Contact us'
    })
    .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsController',
        title: 'Products and services'
    })
    .otherwise({
        redirectTo: '/'
    });
})
  .run(['$rootScope', '$location', function($rootScope, $location) {

    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.title = current.$$route.title;
    });
    $rootScope.$on('$routeChangeError', function(event, current, previous, eventObj) {
        if (eventObj.authenticated === false) {
            $location.path('/login');
        }
    });
}]);
