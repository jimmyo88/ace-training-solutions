'use strict';

angular.module('aceTrainingApp')
  .controller('AdminController',['$scope','FirebaseService', function ($scope, FirebaseService) {
//

        $scope.posts = FirebaseService.getPosts();
        $scope.localPosts = [];
        $scope.newPost = {name: '', body: ''};
        var size = 0;

        $scope.removePost = function (id) {
            FirebaseService.removePost(id);
        };

        $scope.updatePost = function (id) {
            FirebaseService.updatePost(id);
            $scope.newPost = {name: '', body: ''};
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


        $scope.moveUp = function(post) {
            var currentPosition = $scope.posts.indexOf(post);
            if (currentPosition > 0) {
                var newPosition = currentPosition - 1;
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

//            if (crntPos < $scope.posts.length) {
//
//                this.remove(crntPos);
//
//                $scope.posts.splice(crntPos, 1);
//                $scope.posts.splice(crntPos + 1, 0, post);
//                for(var i = 0; i < $scope.posts.length; i++){
//                    var obj = {
//                        name: $scope.posts[i].name,
//                        body: $scope.posts[i].body
//                    };
//                    $scope.localPosts.push(obj);
//                }
//                FirebaseService.updateAllPosts($scope.localPosts);
//                $scope.posts = $scope.localPosts;
//            }
        };
  }]);
