'use strict';

angular.module('aceTrainingApp')
  .controller('BlogController', [ '$scope', 'FirebaseService', function ($scope, FirebaseSvc) {

    $scope.posts = FirebaseSvc.getFirstPosts();
        $scope.currentPage = 0;

        $scope.getNextFivePosts = function(){
            $scope.currentPage += 1;
            $scope.posts = FirebaseSvc.getNextFivePosts($scope.posts[$scope.posts.length-1]);
        };

        $scope.getPreviousFivePosts = function(){
            $scope.currentPage -= 1;
            $scope.posts = FirebaseSvc.getPreviousFivePosts($scope.posts[0]);
        }


  }]);
