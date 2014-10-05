/*global Firebase */
'use strict';

angular.module('aceTrainingApp')
  .controller('BlogController', [ '$scope', '$firebase', function ($scope, $firebase) {

        var ref = new Firebase('https://acetrainingsolutions.firebaseio.com/');
        // create an AngularFire reference to the data
        var sync = $firebase(ref);
        var messagesArray = sync.$asArray();
        $scope.messages = messagesArray;
        // download the data into a local object
        $scope.data = sync.$asObject();

  }]);
