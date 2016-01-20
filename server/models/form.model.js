var mock = require("./form.mock.json");
var uuid = require('node-uuid');

module.exports = function(app) {
    var service = {
        createForm: createForm,
        findAllForms: findAllForms,
        findFormById: findFormById,
        updateForm: updateForm,
        deleteForm: deleteForm,
        findFormByTitle: findFormByTitle, 
        findFormsByUserId: findFormsByUserId,
        getFieldsByFormId: getFieldsByFormId,
        getFieldFromForm: getFieldFromForm,
        deleteFieldFromForm: deleteFieldFromForm,
        createFieldInForm: createFieldInForm,
        updateFieldInForm: updateFieldInForm
    };
    return service;
    
    function createForm(userId, newForm){
        console.log("Hello from Model CreateForm");
        newForm.userId = userId;
        newForm.id = uuid.v1();
        console.log(newForm);
        mock.push(newForm);
        return newForm;
    };
    
    function findAllForms(){
        return mock;
    };

    function findFormById(id){
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == id) {
                return mock[i];
            }
        }
    }

    function updateForm(id, form){
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == id) {
                mock[i].title = form.title;
                mock[i].userId = form.userId
                mock[i].fields = form.fields;
                break;
            }
        }
        return mock;
    }
    
    function deleteForm(id){
        console.log("hello from Model deleteForm");
        console.log(id);
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == id) {
                mock.splice(i, 1);
            }
        }
    }
    
    function findFormByTitle(title) {
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].title == title) {
                return mock[i];
            }
        }
    }
    
    function findFormsByUserId(userId){
        console.log("Hello from Model Form findFormsByUserId");
        var forms = [];
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].userId == userId) {
                forms.push(mock[i]);
            }
        }
        return forms;
    }
    
    function getFieldsByFormId(formId) {
        console.log("Hello from FormModel getFieldsByFormId");
        var fields = [];
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == formId) {
                fields = mock[i].fields;
                break;
            }
        }
        console.log(fields);
        return fields;
    }
    
    function getFieldFromForm(formId, fieldId) {
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == formId) {
                for (var j = 0; j < mock[i].fields.length; j++) {
                    if (mock[i].fields[j].id == fieldId) {
                        return mock[i].fields[j];
                    }
                }
            }
        }
    }
    
    function deleteFieldFromForm(formId, fieldId) {
        console.log("Hello from FormModel deleteFieldFromForm");
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == formId) {
                for (var j = 0; j < mock[i].fields.length; j++) {
                    if (mock[i].fields[j].id == fieldId) {
                        mock[i].fields.splice(j, 1);
                    }
                }
                return mock[i].fields;
            }
        }
    }
    
    function createFieldInForm(formId, newField) {
        console.log("Hello from FormModel createFieldInForm");
        var fields = [];
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == formId) {
                newField.id = uuid.v1();
                mock[i].fields.push(newField);
                fields = mock[i].fields;
                break;
            }
        }
        console.log(fields);
        return fields;
    }
    
    function updateFieldInForm(formId, fieldId, newField) {
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == formId) {
                for (var j = 0; j < mock[i].fields.length; j++) {
                    if (mock[i].fields[j].id == fieldId) {
                        mock[i].fields[j].label = newField.label;
                        mock[i].fields[j].type = newField.type;
                        mock[i].fields[j].placeholder = newField.placeholder;
                        mock[i].fields[j].options = newField.options;
                    }
                }
            }
        }
    }
}