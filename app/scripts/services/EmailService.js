'use strict';

angular.module('aceTrainingApp').factory('EmailService', function($http) {

    function send(name, email, phoneNumber, message) {
        $http.post('http://localhost:8080/send-email', {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message
        }).then(function(result) {
            console.log(result);
        }, function(error) {
            console.log(error);
        });
    }

    return {
        send: send
    };
});


