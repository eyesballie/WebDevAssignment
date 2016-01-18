//var mock = require("./user.mock.json");
var mock = [
    {"id": 123, "firstName": "Alice", 	"lastName": "Wonderland",	"username": "alice", 	"password": "alice"},
	{"id": 234, "firstName": "Bob",	"lastName": "Hope", 		"username": "bob", 	"password": "bob"},
	{"id": 345, "firstName": "Charlie",	"lastName": "Brown", 		"username": "charlie", "password": "charlie"},
	{"id": 456, "firstName": "Dan",	"lastName": "Craig", 		"username": "dan", 	"password": "dan"},
	{"id": 567, "firstName": "Edward",	"lastName": "Norton", 		"username": "ed",	"password": "ed"}
]


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
        console.log("hello from model");
        var newuser = {
			id : "001",
			username : newuser.username,
			password : newuser.password,
			email : newuser.email,
			firstName : newuser.firstName,
			lastName : newuser.lastName
		};
        mock.push(newuser);
        return mock;
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
            }
        }
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
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].username == credentials.username &&
                mock[i].password == credentials.password) {
                return mock[i];
            }
        }
    }
}