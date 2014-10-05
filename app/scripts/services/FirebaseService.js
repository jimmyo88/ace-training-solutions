'use strict';

angular.module('aceTrainingApp').service('FirebaseService', [ '$firebase', function($firebase){
    var service = {};

    var ref = new Firebase('https://acetrainingsolutions.firebaseio.com/');
    // create an AngularFire reference to the data
    var sync = $firebase(ref);


    service.getPosts = function(){
        return sync.$asArray();
    };

    return service;
}]);


