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
        
        function createFieldForForm(formId, field) {
            var deferred = $q.defer();
            $http.post("/api/assignment/form/" + formId + "/field", field)
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function getFieldsForForm(formId) {
            var deferred = $q.defer();
            $http.get("/api/assignment/form/" + formId + "/field")
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function getFieldForForm(formId, fieldId) {
            var deferred = $q.defer();
            $http.get("/api/assignment/form/" + formId + "/field/" + fieldId)
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function deleteFieldFromForm(formId, fieldId) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/form/" + formId + "/field/" + fieldId)
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
        
        function updateField(formId, fieldId, field) {
            var deferred = $q.defer();
            $http.put("/api/assignment/form/" + formId + "/field/" + fieldId, field)
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
        }
    }
})();