"use strict";
(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
    
    function FormController($rootScope, $scope, FormService) {
        
        var model = this;
        model.user = $rootScope.user;
        model.addForm = addForm;
        model.updateForm = updateForm;
        model.deleteForm = deleteForm;
        model.selectForm = selectForm;
        model.saveFormId = saveFormId;
        
        function init() {
            if (model.user != null) {
                var userId = $rootScope.user.id;
                console.log(userId + " in controller");
                FormService
                    .findAllFormsForUser(userId)
                    .then(function(forms) {
                        model.forms = forms;
                    });
            }
            else {
                model.forms = [];
            }
        };
        
        init();
        
        function addForm() {
            console.log("Hello from FromController addForm");
            console.log(model.forms);
            var userId = $rootScope.user.id;
            var newForm = {
                "id" : null,
                "title" : model.newForm.title,
                "userId" : $rootScope.user.id,
                "fields" : []
            };
            FormService
                .createFormForUser(userId, newForm)
                .then(function(response) {
                    console.log(response);
                    model.forms.push(response);
                    console.log(model.forms);
                });
        }
        
        function updateForm() {
            console.log("Hello from Controller updateForm. ");
            console.log(model.newForm);
            var formId = model.newForm.id;
            FormService
                .updateFormById(formId, model.newForm)
                .then(function(forms) {
                    console.log(forms);
                    model.newForm = null;
                });
        }
        
        function deleteForm(index) {
            console.log("Hello from Controller deleteForm. Index is " + index);
            FormService
                .deleteFormById(model.forms[index].id)
                .then(function(forms) {
                    model.forms.splice(index, 1);
                    console.log(forms);
                    model.forms = forms;
                });
        }
        
        function selectForm(index) {
            console.log("Hello from Controller selectForm. Index is " + index);
            console.log(model.forms);
            model.selectedFormIndex = index;
            model.newForm = model.forms[index];
            console.log(model.newForm);
        }
        
        function saveFormId(form) {
            console.log("Hello from Form Controller saveFormId. form is ");
            console.log(form);
            $rootScope.formId = form.id;
        }
    }
    
})();