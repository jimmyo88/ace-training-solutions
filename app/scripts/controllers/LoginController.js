'use strict';

/**
 * @ngdoc function
 * @name aceTrainingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aceTrainingApp
 */
angular.module('aceTrainingApp').controller('LoginController', ['$scope', '$location', '$window', 'AuthenticationService',function ($scope, $location, $window, authenticationSvc) {

        $scope.userInfo = null;
        $scope.login = function () {
            authenticationSvc.login($scope.username, $scope.password)
                .then(function (result) {
                    $scope.userInfo = result;
                    history.back();
                }, function (error) {
                    $window.alert('Invalid credentials');
                    console.log(error);
                });
        };
  }]);
