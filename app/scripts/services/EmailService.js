'use strict';

angular.module('aceTrainingApp').factory('EmailService', function($http) {

    function send(name, email, phoneNumber, message) {
        $http.post('https://user-authentication-service.herokuapp.com/send-email', {
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


