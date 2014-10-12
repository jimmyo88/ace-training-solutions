'use strict';

angular.module('aceTrainingApp').factory('FirebaseService', [ '$firebase', function($firebase){

    var ref = new Firebase('https://acetrainingsolutions.firebaseio.com/');

    var posts = $firebase(ref);

    var getRecord = function(index){
        return ref.$asArray();
    };

    var getPosts = function(){
        return posts.$asArray();
    };

    var removePost = function(id){
        posts.$asArray().$remove(id);
    };

    var updatePost = function(id){
        posts.$asArray().$save(id);
    };

    var updateAllPosts = function(postsArray){
        ref.set(postsArray);
    };

    var addPost = function(index){
        posts.$asArray().$add(index);
    };

    return {
        getRecord: getRecord,
        getPosts: getPosts,
        removePost: removePost,
        updatePost: updatePost,
        addPost: addPost,
        updateAllPosts: updateAllPosts
    };
}]);


