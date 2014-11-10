'use strict';

angular.module('aceTrainingApp').controller('HomeController', function ($scope) {
    $scope.myInterval = 4000;
    $scope.slides = [
        {image: 'https://s3-eu-west-1.amazonaws.com/ace-training-services/home/home-stock-image-1.jpg'},
        {image: 'https://s3-eu-west-1.amazonaws.com/ace-training-services/home/home-stock-image-2.jpg'},
        {image: 'https://s3-eu-west-1.amazonaws.com/ace-training-services/home/home-stock-image-3.jpg'}];
    $scope.information = [
        {
         title: 'Customer Service',
         image: 'https://s3-eu-west-1.amazonaws.com/ace-training-services/home/customer-service-stock.jpg',
         summary: 'Deliver outstanding service through improved knowledge and skills.'
        },
        {
            title: 'Increasing Revenue',
            image: 'https://s3-eu-west-1.amazonaws.com/ace-training-services/home/increasing-revenue-stock.jpg',
            summary: 'summary: Generate additional revenue by developing individual and team selling skills.'

        },
        {
            title: 'Team Leadership',
            image: 'https://s3-eu-west-1.amazonaws.com/ace-training-services/home/leadership-stock.png',
            summary: 'Motivate and inspire others to offer outstanding service.'
        }
    ];
});