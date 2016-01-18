"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);
        
    function FormService($http, $q) {
        var service = {
            getAllForms: getAllForms,
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };
        return service;
        
        function createFormForUser(userId, form) {
            var deferred = $q.defer();
            $http.post("/api/assignment/user/" + userId + "/form", form)
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function findAllFormsForUser(userId) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/" + userId + "/form")
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function deleteFormById(formId) {
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