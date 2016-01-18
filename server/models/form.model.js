var mock = require("./form.mock.json");

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
    
    function createForm(newform){
        mock.push(form);
        return mock;
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
                mock[i].fields = form.fields;
            }
        }
    }
    
    function deleteForm(id){
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
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].userId == userId) {
                return mock[i];
            }
        }
    }
    
    function getFieldsByFormId(formId) {
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == formId) {
                return mock[i].fields;
            }
        }
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
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == formId) {
                for (var j = 0; j < mock[i].fields.length; j++) {
                    if (mock[i].fields[j].id == fieldId) {
                        mock[i].fields.splice(j, 1);
                    }
                }
            }
        }
    }
    
    function createFieldInForm(formId, newField) {
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == formId) {
                mock[i].fields.push(newField);
            }
        }
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