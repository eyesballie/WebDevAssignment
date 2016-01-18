module.exports = function(app, formModel) {
    
    app.get('/api/assignment/user/:userId/form', function(req, res) {
        // returns an array of forms belonging to a user whose id is equal to the 
        // userId path parameter
        var userId  = req.params.userId;
        var formsOfUserId = formModel.findFormsByUserId(userId);
        res.json(formsOfUserId);
    });
    
    app.get('/api/assignment/form/:formId', function(req, res) {
        // returns a form object whose id is equal to the formId path parameter
        var id = req.params.formId;
        var form = formModel.findFormById(id);
        res.json(form);
    });
    
    app.delete('/api/assignment/form/:formId', function(req, res) {
        // removes a form object whose id is equal to the formId path parameter
        var index = req.params.formId;
        formModel.deleteForm(index);
        res.json(formModel.findAllForms());
    });
    
    app.post('/api/assignment/user/:userId/form', function(req, res) {
        // !!! creates a new form whose properties are the same as the form object embedded 
        // in the HTTP request's body and the form belongs to a user whose id is equal to 
        // the userId path parameter. The form object's id is initially null since it is a 
        // new record. The id of the new form should be set dynamically using Node.js guid 
        // or node-uuid libraries. These will eventually be set by the database when they 
        // are inserted into a collection
        var inputForm = req.body;
        inputForm.userId = req.params.userId;
        inputForm.id = Math.floor((1 + Math.random()) * 0*10000).toString(16).substring(1);
        var newForm = formModel.createForm(inputForm);
        res.json(newForm);
    });

    
    app.put('/api/assignment/form/:formId', function(req, res) {
        // !!! updates a form object whose id is equal to the formId path parameter so that 
        // its properties are the same as the property values of the form object embedded 
        // in the request's body
        var formId = req.params.formId;
        var newForm = req.body;
        formModel.updateForm(formId, newForm);
        res.json(formModel.findAllForms());
    });
    
    

}