(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($scope, $rootScope, $location, UserService) {
        var model = this;
        model.$location = $location;
        
        model.register = register;
        
        function register() {
            if (input_isValid()) {
                var newUser = {
                    "username": model.username,
                    "password": model.password,
                    "email": model.email,
                    "firstName": "",
                    "lastName": ""
                }
                
                UserService
                    .createUser(newUser)
                    .then(function(newUser) {
                        $scope.user = newUser;
                        $rootScope.user = newUser;
                        $location.path("/profile");
                    });
            }
        }

        function input_isValid() {
            //username is not empty
            if (model.username == "" || model.username == undefined) {
                alert("Username should not be empty");
                return false;
            }
            
            //password is not empty
            else if (model.password == "" || model.password == undefined) {
                alert("Password should not be empty");
                return false;
            }
            
            //password should match
            else if (model.verifypassword != model.password) {
                alert("Password should match");
                return false;
            }
            
            return true;
        }
    }
    
})();

/*
function LoginController($rootScope, $location, UserService) {
    
        var model = this;
        model.$location = $location;
        
        model.login = login;
    
        function login() {
            UserService
                .findUserByUsernameAndPassword(model.username, model.password)
                .then(function(user){
                    if (response != null) {
                        $rootScope.user = user;
                        $location.path("/profile");
                    }
                    else {
                        window.alert("User information incorrect. Please enter again.");   
                    }
                });
        }
        
    }
*/