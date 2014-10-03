'use strict';

/**
 * @ngdoc function
 * @name aceTrainingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aceTrainingApp
 */
angular.module('aceTrainingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
