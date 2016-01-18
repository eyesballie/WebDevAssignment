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
            $http.get("/api/assignment/user?username=" + username + "&password=" + password)
                .success(function(response) {
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
            console.log("Entering createUser");
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
            $http.put("/api/assignment/user/" + id, newUser)
                .success(function(response) {
                    deferred.resolve(response);
                });  
            return deferred.promise;
        }; 
        
        /** Function to generate Guid, from instructor Jose Annunziato.**/
        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };
    }
})();