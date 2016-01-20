"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);
        
    function FormService($http, $q) {
        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };
        return service;
        
        
        function createFormForUser(userId, form) {
            console.log("Hello from FormService createFormForUser");
            console.log(form);
            var deferred = $q.defer();
            $http.post("/api/assignment/user/" + userId + "/form", form)
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function findAllFormsForUser(userId) {
            console.log("hello from FormService findAllFormsForUser");
            var deferred = $q.defer();
            $http.get("/api/assignment/user/" + userId + "/form")
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        
        function deleteFormById(formId) {
            console.log("hello from FormService deleteFormById");
            console.log(formId);
            var deferred = $q.defer();
            $http.delete("/api/assignment/form/" + formId)
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function updateFormById(formId, newForm) {
            var deferred = $q.defer();
            $http.put("/api/assignment/form/" + formId)
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
    }
    
})();