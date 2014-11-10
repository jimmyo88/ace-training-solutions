'use strict';

angular.module('aceTrainingApp').factory('EmailService', function($http) {

    var emailService = {};

    emailService.send = function(name, email, phoneNumber, message) {
        return $http.post('https://user-authentication-service.herokuapp.com/send-email', {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message
        });
    };

    return emailService;
});


