(function() {
    angular.module('recipe', ['ngResource']).config(function($logProvider) {
        $logProvider.debugEnabled(false);
    }).run(
        function($rootScope) {
            $rootScope.title = 'Spaghetti code recipies';
        });
})();