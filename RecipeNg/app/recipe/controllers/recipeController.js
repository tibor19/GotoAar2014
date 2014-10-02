(function () {
    angular.module('recipe')
        .controller('recipeController', ['$scope', function ($scope) {

            $scope.recipe = recipe;
            $scope.message = 'Hello World';

            $scope.alert = function () {
                console.log($scope.message);
            }
    }]);
})();