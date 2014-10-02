(function () {
    angular.module('recipe')
        .controller('recipeController', ['$scope', '$log', 'simpleRecipeService',
            function ($scope, $log, recipeService) {

                $scope.recipe = recipeService.getRecipe(1);
                $scope.count = recipeService.getRecipes().length;

                $scope.alert = function () {
                    $log.debug($scope.message);
                }
            }]);
})();