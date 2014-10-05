'use strict';

angular.module('aceTrainingApp')
  .controller('BlogController', [ '$scope', 'FirebaseService', function ($scope, FirebaseSvc) {

    $scope.messages = FirebaseSvc.getPosts();

  }]);
