(function () {
    angular.module("basicApp").factory('basicApp.services.commonService', function () {
        console.log($state.$urlRouter);
        $scope.currentView = $location.url();
        console.log($scope.currentView);
        $scope.$watch(localStorage.appLoggedIn, function (newValue, oldValue) {
            console.log($scope.currentView);
        });
    });
})();