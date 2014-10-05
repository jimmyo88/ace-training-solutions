'use strict';

angular.module('aceTrainingApp').controller('HomeController', function ($scope) {
    $scope.myInterval = 7000;
    $scope.slides = [
        {image: 'images/home-stock-image-1.jpg'},
        {image: 'images/home-stock-image-2.jpg'},
        {image: 'images/home-stock-image-3.jpg'}];
    $scope.information = [
        {
         title: 'Customer Service',
         image: 'images/customer-service-stock.jpg',
         summary: 'Deliver outstanding service through improved knowledge and skills.'
        },
        {
            title: 'Increasing Revenue',
            image: 'images/increasing-revenue-stock.jpg',
            summary: 'summary: Generate additional revenue by developing individual and team selling skills.'

        },
        {
            title: 'Team Leadership',
            image: 'images/leadership-stock.png',
            summary: 'Motivate and inspire others to offer outstanding service.'
        }
    ];
});