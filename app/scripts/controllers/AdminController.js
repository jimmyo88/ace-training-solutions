'use strict';

angular.module('aceTrainingApp')
  .controller('AdminController',['$scope','FirebaseService', function ($scope, FirebaseService) {

        function getDate() {
            var currentDate = new Date();
            var day = currentDate.getDate();
            var month = currentDate.getMonth() + 1;
            var year = currentDate.getFullYear();
            return day + '/' + month + '/' + year;
        }

        $scope.posts = FirebaseService.getAllPosts();
        $scope.localPosts = [];
        $scope.newPost = {name: '', message: '', date: getDate(), title: '', opened: false};
        var size = 0;

        $scope.removePost = function (id) {
            FirebaseService.removePost(id);
        };

        $scope.updatePost = function (id) {
            $scope.posts[id].date = convertDate($scope.posts[id].date);
            FirebaseService.updatePost(id);
            $scope.newPost = {name: '', message: '', date: getDate(), title: '', opened: false};
        };

        function convertDate(inputFormat) {
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(inputFormat);
            return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
        }

        $scope.addPost = function() {
            FirebaseService.addPost(angular.copy($scope.newPost));
        };

        $scope.getPostSize = function(index) {
            if(index===0) {
                size = FirebaseService.getAllPosts().length - 1;
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
                newItem.message = oldItem.message;
                newItem.date = oldItem.date;
                newItem.title = oldItem.title;

                oldItem.name = tempItem.name;
                oldItem.message = tempItem.message;
                oldItem.date = tempItem.date;
                oldItem.title = tempItem.title;
                FirebaseService.updatePost(newItem);
                FirebaseService.updatePost(oldItem);
            }
        };

        $scope.moveDown = function(post) {
            var currentPosition = $scope.posts.indexOf(post);
            if (currentPosition < $scope.posts.length - 1) {
                var newPosition = currentPosition + 1;
                var oldItem = $scope.posts[currentPosition];
                var newItem = $scope.posts[newPosition];

                var tempItem = angular.copy(newItem);
                newItem.name = oldItem.name;
                newItem.message = oldItem.message;
                newItem.date = oldItem.date;
                newItem.title = oldItem.title;

                oldItem.name = tempItem.name;
                oldItem.message = tempItem.message;
                oldItem.date = tempItem.date;
                oldItem.title = tempItem.title;
                FirebaseService.updatePost(newItem);
                FirebaseService.updatePost(oldItem);
            }
        };


        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };


        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.toggleMin = function() {
            $scope.minDate = ( $scope.minDate ) ? null : new Date();
        };
        $scope.toggleMin();
//        $scope.opened = [];

        $scope.open = function($event, index) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.posts[index].opened = true;
        };
  }]);

