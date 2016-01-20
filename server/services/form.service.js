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
        console.log(index);
        formModel.deleteForm(index);
        res.json(formModel.findAllForms());
    });
    
    app.post('/api/assignment/user/:userId/form', function(req, res) {
        var newForm = req.body;
        userId = req.params.userId;
        var newForm = formModel.createForm(userId, newForm);
        res.json(newForm);
    });

    
    app.put('/api/assignment/form/:formId', function(req, res) {
        // !!! updates a form object whose id is equal to the formId path parameter so that 
        // its properties are the same as the property values of the form object embedded 
        // in the request's body
        var formId = req.params.formId;
        var newForm = req.body;
        res.json(formModel.updateForm(formId, newForm));
    });
    
    

}