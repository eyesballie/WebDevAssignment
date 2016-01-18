(function() {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    
    function ProfileController($rootScope, $location, UserService) {
        var model = this;
        model.$location = $location;
        
        model.update = update;
        
        function update() {
            var newUser = {
                "username": model.username,
                "password": model.password,
                "email": model.email,
                "firstName": model.firstname,
                "lastName": model.lastname
            }
            UserService
                .updateUser($rootScope.user.id, newUser)
                .then(function(newUser) {
                    $rootScope.user = newUser;
                    model.username = $rootScope.user.username;
                    model.password = $rootScope.user.password;
                    model.firstName = $rootScope.user.firstName;
                    model.lastName = $rootScope.user.lastName;
                    model.email = $rootScope.user.email;
                });
        }
        
    }
    
})();