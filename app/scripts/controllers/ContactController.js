'use strict';

angular.module('aceTrainingApp').controller('ContactController',['$scope', 'EmailService', function ($scope, EmailService) {

    $scope.sent = false;

    $scope.send = function(){
        EmailService.send($scope.name, $scope.email, $scope.phoneNumber, $scope.message)
            .success(function(response){
                $scope.sent = true;
                $scope.response = response.content;
                if($scope.response = 'success'){
                    clearboxes();
                }
        });
    };

    function clearboxes() {
        $scope.name = '';
        $scope.email = '';
        $scope.phoneNumber = '';
        $scope.message = '';
    }


}]);