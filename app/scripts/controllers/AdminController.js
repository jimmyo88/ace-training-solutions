'use strict';

angular.module('aceTrainingApp')
  .controller('AdminController',['$scope','FirebaseService', function ($scope, FirebaseService) {
//

        $scope.posts = FirebaseService.getPosts();
        $scope.localPosts = [];
        $scope.newPost = {name: '', message: '', date: getDate()};
        var size = 0;

        $scope.removePost = function (id) {
            FirebaseService.removePost(id);
        };

        $scope.updatePost = function (id) {
            FirebaseService.updatePost(id);
            $scope.newPost = {name: '', message: '', date: getDate()};
        };

        $scope.addPost = function() {
            FirebaseService.addPost(angular.copy($scope.newPost));
        };

        $scope.getPostSize = function(index) {
            if(index==0) {
                size = FirebaseService.getPosts().length - 1;
            }
            return index === size;
        };

        function getDate() {
            var currentDate = new Date()
            var day = currentDate.getDate()
            var month = currentDate.getMonth() + 1
            var year = currentDate.getFullYear()
            return day + "/" + month + "/" + year
        };


        $scope.moveUp = function(post) {
            var currentPosition = $scope.posts.indexOf(post);
            if (currentPosition > 0) {
                var newPosition = currentPosition - 1;
                var oldItem = $scope.posts[currentPosition];
                var newItem = $scope.posts[newPosition];

                var tempItem = angular.copy(newItem);
                newItem.name = oldItem.name;
                newItem.message = oldItem.message;
                newItem.date = oldItem.date;

                oldItem.name = tempItem.name;
                oldItem.message = tempItem.message;
                oldItem.date = tempItem.date;
                FirebaseService.updatePost(newItem);
                FirebaseService.updatePost(oldItem);
            }
        };

        $scope.moveDown = function(post) {
//            $scope.localPosts = [];
            var currentPosition = $scope.posts.indexOf(post);
            if (currentPosition < $scope.posts.length - 1) {
                var newPosition = currentPosition + 1;
                var oldItem = $scope.posts[currentPosition];
                var newItem = $scope.posts[newPosition];

                var tempItem = angular.copy(newItem);
                newItem.name = oldItem.name;
                newItem.body = oldItem.body;
                oldItem.name = tempItem.name;
                oldItem.body = tempItem.body;
                FirebaseService.updatePost(newItem);
                FirebaseService.updatePost(oldItem);
            }
        };
  }]);
