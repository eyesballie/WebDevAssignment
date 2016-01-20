module.exports = function(app, userModel) {
    app.get('/api/assignment/user/username=:username&password=:password', function(req, res) {
        console.log("Hello from get('/api/assignment/user?username=username&password=password'");
        var credentials = {"username": req.params.username, "password": req.params.password};
        console.log(req.params.username + " " + req.params.password);
        
        var user = userModel.findUserByCredentials(credentials);
        
        res.json(user);
    });
    
    app.get('/api/assignment/user?username=username', function(req, res) {
        console.log("Hello from get('/api/assignment/user?username=username'");
        var inputUsername = req.params.username;
        var user = userModel.findUserByUsername(inputUsername);
        res.json(user);
    });
    
    app.get('/api/assignment/user/:id', function(req, res) {
        console.log("Hello from get('/api/assignment/user/:id'");
        var index = req.params.id;
        res.json(userModel.findUserById(index));
    });
    
    app.get('/api/assignment/user', function(req, res) {
        console.log("Hello from get('/api/assignment/user'");
        res.json(userModel.findAllUsers());
    });
    
    app.post('/api/assignment/user', function(req, res) {
        console.log("Hello from post('/api/assignment/user'");
        var user = req.body;
        var response = userModel.createUser(user);
        res.json(response);
    });
    
    app.put('/api/assignment/user/:id', function(req, res) {
        console.log("Hello from put('/api/assignment/user/:id'");
        var index = req.params.id;
        var newUser = req.body;
        userModel.updateUser(index, newUser);
        console.log(req.params.id);
        console.log(newUser);
        res.json(userModel.findAllUsers());
    });
    
    app.delete('/api/user/:id', function(req, res) {
        console.log("Hello from delete('/api/user/:id'");
        var index = req.params.id;
        userModel.deleteUser(index);
        res.json(userModel.findAllUsers());
    });

}