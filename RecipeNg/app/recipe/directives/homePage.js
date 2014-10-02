(function() {
    'use strict';

    angular
        .module('recipe')
        .directive('homePage', homePage);

    homePage.$inject = ['$window'];
    
    function homePage ($window) {
        // Usage:
        //     <homePage></homePage>
        // Creates:
        // 
        var directive = {
            link: link,
            templateUrl :'app/recipe/templates/home.html', 
            controller : 'recipeController',
            restrict: 'EA'
            // scope : {} isolated scope
            // scope : true inherited scope
            // scope : null/undefined shared scope
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();