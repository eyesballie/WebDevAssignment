"use strict";
(function() {
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);
    
    function FieldController($rootScope, $scope, FieldService) {
        
        var model = this;
        model.addField = addField;
        model.removeField = removeField;
        
        model.user = $rootScope.user;
        model.formId = $rootScope.formId;
        
        function init() {
            console.log("Helo from init in FieldController");
            console.log("current user is ");
            console.log(model.user);
            console.log("current form is ");
            console.log(model.formId);
            if (model.formId != null) {
                var formId = model.formId;
                console.log(formId + " in Field Controller");
                FieldService
                    .getFieldsForForm(formId)
                    .then(function(fields) {
                        model.fields = fields;
                    });
            }
            else {
                model.fields = [];
            }
        };
        
        init();
        
        function addField() {
            console.log("Hello from FieldController addField");
            console.log(model.fields);
            var newField = createNewField(model.fieldType);
            FieldService
                .createFieldForForm(model.formId, newField)
                .then(function(response) {
                    console.log(response);
                    model.fields = response;
                    console.log(model.fields);
                });
        }
        
        function createNewField(fieldType) {
            var newField = {
                "id" : null,
            }
            switch (fieldType) {
                case "TEXT":
                    newField.label = "New Text Field";
                    newField.type = fieldType;
                    newField.placeholder = "New Field";
                    break;
                case "TEXTAREA":
                    newField.label = "New Text Field";
                    newField.type = fieldType;
                    newField.placeholder = "New Field";
                    break;
                case "DATE":
                    newField.label = "New Date Field";
                    newField.type = fieldType;
                    break;
                case "OPTIONS":
                    newField.label = "New Dropdown";
                    newField.type = fieldType;
                    var newOptions = [
                        {"label": "Option 1", "value": "OPTION_1"},
                        {"label": "Option 2", "value": "OPTION_2"},
                        {"label": "Option 3", "value": "OPTION_3"}
                    ];
                    newField.options = newOptions;
                    break;
                case "CHECKBOX":
                    newField.label = "New Checkboxes";
                    newField.type = fieldType;
                    var newOptions = [
                        {"label": "Option A", "value": "OPTION_A"},
                        {"label": "Option B", "value": "OPTION_B"},
                        {"label": "Option C", "value": "OPTION_C"}
                    ];
                    newField.options = newOptions;
                    break;
                case "RADIOS":
                    newField.label = "New Radio Buttons";
                    newField.type = fieldType;
                    var newOptions = [
                        {"label": "Option X", "value": "OPTION_X"},
                        {"label": "Option Y", "value": "OPTION_Y"},
                        {"label": "Option Z", "value": "OPTION_Z"}
                    ];
                    newField.options = newOptions;
                    break;
            }
            return newField
        }
        
        function removeField(fieldId) {
            console.log("Hello from Controller removeFeild. FieldID is " + fieldId);
            FieldService
                .deleteFieldFromForm(model.formId, fieldId)
                .then(function(fields) {
                    console.log(fields);
                    model.fields = fields;
                });
        }
        
        /*
        function updateField() {
            console.log("Hello from Controller updateField. ");
            console.log(model.newForm);
            var formId = model.newForm.id;
            FormService
                .updateFormById(formId, model.newForm)
                .then(function(forms) {
                    console.log(forms);
                    model.newForm = null;
                });
        }
        
        
        
        function selectForm(index) {
            console.log("Hello from Controller selectForm. Index is " + index);
            console.log(model.forms);
            model.selectedFormIndex = index;
            model.newForm = model.forms[index];
            console.log(model.newForm);
        }
        */
    }
    
})();