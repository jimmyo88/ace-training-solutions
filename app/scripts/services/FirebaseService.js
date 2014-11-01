'use strict';

angular.module('aceTrainingApp').factory('FirebaseService', ['$firebase', function($firebase){

    var ref = new Firebase('https://acetrainingsolutions.firebaseio.com/');

    var posts = $firebase(ref);
    var firebase = $firebase;
    var itemsPerPage = 5;


    var getAllPosts = function(){
        return posts.$asArray();
    };

    var getFirstPosts = function(){
        var firstRef = ref.startAt().limit(itemsPerPage);
        posts = firebase(firstRef).$asArray();
        return posts;
    };

    var getNextFivePosts = function(last){
        var nextRef = ref.startAt(null, posts.$keyAt(last)).limit(itemsPerPage);
        posts = firebase(nextRef).$asArray();
        return posts;
    };

    var getPreviousFivePosts = function(first){
        var prevRef = ref.endAt(null, posts.$keyAt(first)).limit(itemsPerPage);
        posts = firebase(prevRef).$asArray();
        return posts;
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
        getFirstPosts: getFirstPosts,
        getNextFivePosts: getNextFivePosts,
        getPreviousFivePosts: getPreviousFivePosts,
        getPosts: getAllPosts,
        removePost: removePost,
        updatePost: updatePost,
        addPost: addPost,
        updateAllPosts: updateAllPosts
    };
}]);


