(function() {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    
    function ProfileController($scope, $rootScope, $location, UserService) {
        var model = this;
        $scope.user = $rootScope.user;
        model.$location = $location;
        
        model.update = update;
        
        console.log("Hello from ProfileController");
        
        function update() {
            var newUser = {
                "username": model.username,
                "password": model.password,
                "firstName": model.firstname,
                "lastName": model.lastname,
                "email": model.email
            }
            UserService
                .updateUser($rootScope.user.id, newUser)
                .then(function(newUser) {
                    console.log("From ProfileController: User is updated");
                    console.log(newUser);
                    $rootScope.user = newUser;
                    $scope.user = newUser;
                });
            
        }
        
    }
    
})();