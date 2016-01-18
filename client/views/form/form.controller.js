(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
    
    function FormController($scope, FormService) {
        $scope.forms = FormService.getAllForms();
        
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        
        function addForm(form) {
            var newForm = {
                name: form.name
            };
            $scope.forms.push(newForm);
        }
        
        function updateForm(form) {
            $scope.forms[$scope.selectedFormIndex] = {
                name: form.name
            };
        }
        
        function deleteForm(index) {
            $scope.forms.splice(index, 1);
        }
        
        function selectForm(index) {
            $scope.selectedFormIndex = index;
            $scope.form = {
                name: $scope.forms[index].name,
            };
        }
    }
    
})();