(function () {

    angular.module('basicApp').controller('basicApp.header.headerController', ['$scope', '$rootScope', '$state', 'basicApp.services.apiUrlConfig', 'basicApp.services.apiMethods', '$translate', '$translatePartialLoader', function ($scope, $rootScope, $state, apiUrlConfig, apiMethods, $translate, $translatePartialLoader) {

        $scope.changeLangauge = function (cultureSpecificLanguage) {
            //$translate.refresh();
            /*var registeredParts = $translatePartialLoader.getRegisteredParts();
             console.log(registeredParts);
             for (var i = 0; i < registeredParts.length; ++i) {
             $translatePartialLoader.deletePart(registeredParts[i],true);
             }*/
            $translate.use(cultureSpecificLanguage);
            /* for (var i = 0; i < registeredParts.length; ++i) {
             $translatePartialLoader.addPart(registeredParts[i]);
             }*/
            $translate.refresh();
        };

        $scope.onLogoutClick = function(){
            var url = apiUrlConfig.logout;
            apiMethods.apiPOSTReq(url).then(function (response) {
                console.log(" logout service success !!!!!");
                $rootScope.loggedInStatus = false;
                $state.go("home");
            }, function(response){
                console.log("logout service failure !!!!!");
                console.log(response);
            });
        }

    }]);
})();