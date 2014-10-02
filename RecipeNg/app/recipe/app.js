(function() {
    angular.module('recipe', []).run(
        function($rootScope) {
            $rootScope.title = 'Spaghetti code recipies';
        });
})();