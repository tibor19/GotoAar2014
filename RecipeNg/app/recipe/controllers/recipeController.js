(function () {
    angular.module('recipe')
        .controller('recipeController', ['$scope', '$log', 'recipeValue', 'recipeValues', function ($scope, $log, recipe, recipes) {

            $scope.recipe = recipe;
            $scope.count = recipes.length;

            $scope.alert = function () {
                $log.debug($scope.message);
            }
    }]);
})();