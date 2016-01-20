"use strict";
(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    
    function LoginController($rootScope, $location, UserService) {
    
        var model = this;
        model.$location = $location;
        
        model.login = login;
        console.log("Hello from LoginController");
        
        function login() {
            UserService
                .findUserByUsernameAndPassword(model.username, model.password)
                .then(function(user){
                    if (user != null) {
                        console.log(user);
                        $rootScope.user = user;
                        $location.path("/profile");
                    }
                    else {
                        console.log("user is null");
                        window.alert("User information incorrect. Please enter again.");   
                    }
                });
        }
        
    }
    
})();