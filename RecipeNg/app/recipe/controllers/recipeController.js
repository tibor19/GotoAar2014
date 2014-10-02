(function () {
    angular.module('recipe')
        .controller('recipeController', ['$scope', '$log', 'resourceRecipeService',
            function ($scope, $log, recipeService) {

                $scope.recipe = { name : 'Working on it'};
                recipeService.getRecipe(2).then(function (data){
                    $scope.recipe = data;
                });

                $scope.count = 0;
                recipeService.getRecipes().then(function (data) {
                    $scope.count = data.length;
                });

                $scope.alert = function () {
                    $log.debug($scope.message);
                }
            }]);
})();