(function() {
    angular.module('recipe', []).config(function($logProvider) {
        $logProvider.debugEnabled(false);
    }).run(
        function($rootScope) {
            $rootScope.title = 'Spaghetti code recipies';
        });
})();