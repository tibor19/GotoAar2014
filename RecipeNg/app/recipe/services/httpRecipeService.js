(function () {
    angular.module('recipe').factory('httpRecipeService',
        ['$http', function ($http) {


            function getRecipe(id) {
                return $http.get('api/recipes/' + (id || 1));
            }

            return {
                getRecipe: getRecipe,
                getRecipes: function () {
                    return $http.get('api/recipes');
                }
            }

        }]
        );

})(); 