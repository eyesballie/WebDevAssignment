module.exports = function(app, userModel) {
    app.post('/api/assignment/user', function(req, res) {
        console.log("Entering app.post");
        var user = req.body;
        var response = userModel.createUser(user);
        console.log(response);
        res.json(response);
    });


    app.get('/api/assignment/user', function(req, res) {
        res.json(userModel.findAllUsers());
    });
    
    app.get('/api/assignment/user/:id', function(req, res) {
        var index = req.params.id;
        res.json(userModel.findUserById(index));
    });
    
    app.get('/api/assignment/user?username=username', function(req, res) {
        var inputUsername = req.params.username;
        var user = userModel.findUserByUsername(inputUsername);
        res.json(user);
    });
    
    app.get('/api/assignment/user?username=username&password=password', function(req, res) {
        var credentials = {"username": req.params.username, "password": req.params.password};
        var user = userModel.findUserByCredentials(credentials);
        res.json(user);
    });
    
    app.put('/api/assignment/user/:id', function(req, res) {
        var index = req.params.id;
        var newUser = req.body;
        userModel.updateUser(index, newUser);
        res.json(userModel.findAllUsers());
    });
    
    app.delete('/api/user/:id', function(req, res) {
        var index = req.params.id;
        userModel.deleteUser(index);
        res.json(userModel.findAllUsers());
    });

}