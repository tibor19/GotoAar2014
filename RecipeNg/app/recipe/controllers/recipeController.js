(function () {
    angular.module('recipe')
        .controller('recipeController', ['$scope', '$log', 'httpRecipeService',
            function ($scope, $log, recipeService) {

                $scope.recipe = { name : 'Working on it'};
                recipeService.getRecipe(1).then(function (result){
                    $scope.recipe = result.data;
                });

                $scope.count = 0;
                recipeService.getRecipes().then(function (result) {
                    $scope.count = result.data.length;
                });

                $scope.alert = function () {
                    $log.debug($scope.message);
                }
            }]);
})();