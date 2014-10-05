'use strict';

angular.module('aceTrainingApp')
  .controller('AdminController', [ '$scope', 'FirebaseService', function ($scope, $firebaseSvc) {

        $scope.messages = $firebaseSvc.getPosts();


  }]);
