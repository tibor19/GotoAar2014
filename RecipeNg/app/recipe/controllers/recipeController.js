(function () {
    angular.module('recipe')
        .controller('recipeController', ['$scope', '$log', function ($scope, $log) {

            $scope.recipe = recipe;

            $scope.alert = function () {
                $log.debug($scope.message);
            }
    }]);
})();