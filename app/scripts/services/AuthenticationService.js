'use strict';

angular.module('aceTrainingApp').factory('AuthenticationService', function($http, $q, $window) {
    var userInfo;

    function login(userName, password) {
        var deferred = $q.defer();

        $http.post('https://user-authentication-service.herokuapp.com/login', {
            username: userName,
            password: password
        }).then(function(result) {
            userInfo = {
                accessToken: result.data.accessToken,
                userName: result.data.username
            };
            $window.sessionStorage.userInfo = JSON.stringify(userInfo);
            deferred.resolve(userInfo);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function getUserInfo() {
        return userInfo;
    }

    function init() {
        if ($window.sessionStorage.userInfo) {
            userInfo = JSON.parse($window.sessionStorage.userInfo);
        }
    }
    init();

    return {
        login: login,
        getUserInfo: getUserInfo
    };
});


