module.exports = function(app, formModel) {

    app.get('/api/assignment/form/:formId/field', function(req, res) {
        // returns an array of fields belonging to a form object whose id is equal to 
        // the formId path parameter
        var formId = req.params.formId;
        res.json(formModel.getFieldsByFormId(formId));
    });
    
    app.get('/api/assignment/form/:formId/field/:fieldId', function(req, res) {
        // returns a field object whose id is equal to the fieldId path parameter and 
        // belonging to a form object whose id is equal to the formId path parameter
        var fieldId = req.params.fieldId;
        var formId = req.params.formId;
        res.json(formModel.getFieldFromForm(formId, fieldId));
    });
    
    app.delete('/api/assignment/form/:formId/field/:fieldId', function(req, res) {
        // removes a field object whose id is equal to the fieldId path parameter and 
        // belonging to a form object whose id is equal to the formId path parameter
        var fieldId = req.params.fieldId;
        var formId = req.params.formId;
        formModel.deleteFieldFromForm(formId, fieldId);
        res.json(formModel.getFieldsByFormId(formId));
    });
    
    app.post('/api/assignment/form/:formId/field', function(req, res) {
        // creates a new field whose properties are the same as the field object embedded 
        // in the request's body and the field belongs to a form whose id is equal to the 
        // formId path parameter. The field object's id is initially null since it is a 
        // new record. The id of the new form field should be set dynamically using 
        // Node.js guid or node-uuid libraries. These will eventually be set by the database 
        // when they are inserted into a collection
        var newField = req.body;
        newField.id = Math.floor((1 + Math.random()) * 0*10000).toString(16).substring(1);
        var formId = req.params.formId;
        formModel.createFieldInForm(formId, newField);
        res.json(formModel.getFieldsByFormId(formId));
    });


    
    app.put('/api/assignment/form/:formId/field/:fieldId', function(req, res) {
        // updates a field object whose id is equal to the fieldId path parameter and 
        // belonging to a form object whose id is equal to the formId path parameter so 
        // that its properties are the same as the property values of the field object 
        // embedded in the request's body
        var fieldId = req.params.fieldId;
        var formId = req.params.formId;
        var newField = req.body;
        formModel.updateFieldInForm(formId, fieldId, newField);
        res.json(formModel.findFormById(formId));
    });
    
    

}