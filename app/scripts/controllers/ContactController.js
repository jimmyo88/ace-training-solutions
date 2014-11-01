'use strict';

angular.module('aceTrainingApp').controller('ContactController',['$scope', 'EmailService', function ($scope, EmailService) {

    $scope.send = function(){
        var name = $scope.name;
        var email = $scope.email;
        var phoneNumber = $scope.phoneNumber;
        var message = $scope.message;
        EmailService.send(name, email, phoneNumber, message);
    };


}]);