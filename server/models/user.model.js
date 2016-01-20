var mock = require("./user.mock.json");
var uuid = require('node-uuid');

module.exports = function(app) {
    var api = {
        createUser: createUser,
        findAllUsers: findAllUsers,
        findUserById: findUserById,
        updateUser: updateUser,
        deleteUser: deleteUser,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    };
    return api;
    
    function createUser(newuser){
        var newuser = {
			id : uuid.v1(),
			username : newuser.username,
			password : newuser.password,
			email : newuser.email,
			firstName : newuser.firstName,
			lastName : newuser.lastName
		};
        mock.push(newuser);
        return newuser;
    };
    
    function findAllUsers(){
        return mock;
    };

    function findUserById(id){
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == id) {
                return mock[i];
            }
        }
    }

    function updateUser(id, user){
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == id) {
                mock[i].username = user.username;
                mock[i].password = user.password;
                mock[i].firstName = user.firstName;
                mock[i].lastName = user.lastName;
                mock[i].email = user.email;
                break;
            }
        }
        return mock[i];
    }
    
    function deleteUser(id){
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id == id) {
                mock.splice(i, 1);
            }
        }
    }
    
    function findUserByUsername(username) {
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].username == username) {
                return mock[i];
            }
        }
    }
    
    function findUserByCredentials(credentials) {
        console.log("Hello from findUserByCredentials in model");
        var result = null;
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].username == credentials.username &&
                mock[i].password == credentials.password) {
                result = mock[i];
                break;
            }
        }
        return result;
    }
}