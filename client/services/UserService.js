"use strict";
(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);
    
    function UserService($http, $q) {
        var service = {
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return service;
        
        function findUserByUsernameAndPassword(username, password) {
            var deferred = $q.defer();
            console.log("Hello from client service, username is " + username + " password is " + password);
            $http.get("/api/assignment/user/username=" + username + "&password=" + password)
                .success(function(response) {
                    console.log(response);
                    deferred.resolve(response);
                });  
            return deferred.promise;
        };
        
        function findAllUsers() {
            var deferred = $q.defer();
            $http.get("/api/assignment/user")
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function createUser(newUser) {
            var deferred = $q.defer();
            $http.post("/api/assignment/user", newUser)
                .success(function(response) {
                    deferred.resolve(response);
                });  
            return deferred.promise;
        };
        
        function deleteUserById(id) {
            var deferred = $q.defer();
            $http.delete("/api/user/" + id)
                .success(function(response) {
                    deferred.resolve(response);
                });  
            return deferred.promise;
        };
        
        function updateUser(id, newUser) {
            var deferred = $q.defer();
            console.log("hello from updateUser in UserService");
            $http.put("/api/assignment/user/" + id, newUser)
                .success(function(response) {
                    deferred.resolve(response);
                });  
            return deferred.promise;
        }; 
        
    }
})();