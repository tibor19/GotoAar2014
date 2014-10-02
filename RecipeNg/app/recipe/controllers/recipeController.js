(function () {
    angular.module('recipe')
        .controller('recipeController', ['$scope', function ($scope) {
        $scope.recipe = recipe;
    }]);
})();