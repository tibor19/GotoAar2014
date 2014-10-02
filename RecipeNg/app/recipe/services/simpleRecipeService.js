(function () {
    angular.module('recipe').factory('simpleRecipeService',
        ['recipeValue', 'recipeValues', function (recipeValue, recipeValues) {

            function doSomething() {
                // We do nothing
            }

            function getRecipePrivate() {
                doSomething();
                return recipeValue;
            }

            return {
                getRecipe: getRecipePrivate,
                getRecipes: function () {
                    return recipeValues;
                }
            }

        }]
        );

})();