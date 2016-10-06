(function () {
    //declare all modules and their dependencies.
    var application = angular.module('basicApp', ['oc.lazyLoad','ui.router','ui.bootstrap', 'pascalprecht.translate']);
    application.config(function ($translatePartialLoaderProvider, $translateProvider, $ocLazyLoadProvider,$httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $ocLazyLoadProvider.config({
            debug: true,
            events: false,
            modules:[
                {
                    name: 'basicApp.home.homeController',
                    files: ['app/common/home/home-controller.js']
                },
                {
                    name: 'basicApp.header.headerController',
                    files: ['app/common/header/header-controller.js']
                },
                {
                    name: 'basicApp.l10n.localizationController',
                    files: ['app/common/l10n/localization-controller.js']
                },
                {
                    name: 'basicApp.login.loginController',
                    files: ['app/common/login/login-controller.js']
                },
                {
                    name: 'basicApp.user-dashboard.profile.profileController',
                    files: ['app/common/user-dashboard/profile/profile-controller.js']
                },
                {
                    name: 'basicApp.user-dashboard.changepassword.changePasswordController',
                    files: ['app/common/user-dashboard/changepassword/changepassword-controller.js']
                },
                {
                    name: 'basicApp.signUp.signUpController',
                    files: ['app/common/signUp/signUp-controller.js']
                },
                {
                    name: 'basicApp.services.commonService',
                    files: ['app/services/common-services.js']
                },
                {
                    name: 'basicApp.login.loginModelService',
                    files: ['app/common/login/login-model.js']
                },
                {
                    name: 'basicApp.services.apiMethods',
                    files: ['app/services/api-methods.js']
                },
                {
                    name: 'basicApp.services.apiUrlConfig',
                    files: ['app/services/api-url-config.js']
                },
                {
                    name: 'basicApp.routes',
                    files: ['app/routes/routes.js']
                }
            ]
        });

       /* $translateProvider.translations('en',
            {
                "SIGN_IN_HEADING":"Please sign in.",
                "EMAIL":"Email address",
                "PASSWORD":"Password",
                "REMEMBER_ME":"Remember me",
                "SIGN_IN":"Sign in"
            });*/
       $translatePartialLoaderProvider.addPart('common/login');
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'i18n/{part}-{lang}.json',
            loadFailureHandler:'MyErrorHandler'
        });
        $translateProvider.preferredLanguage("en_US");
        $translateProvider.fallbackLanguage("en_US");

    });
    application.run(function ($translate, $rootScope, $ocLazyLoad, $http) {
        $ocLazyLoad.load(['basicApp.services.apiUrlConfig', 'basicApp.services.apiMethods']);
        $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
            $translate.refresh();
        });
        $rootScope.$on('$routeChangeStart', function(next, current) {
            console.log("... you could trigger something here ...");
        });
        var url = "http://localhost:8080/isLoggedIn";
        $http.get(url).then(function (response) {
            console.log(" getLoggedInStatus service success !!!!!");
            $rootScope.loggedInStatus = true;
        }, function(response){
            console.log("getLoggedInStatus service failure !!!!!");
            console.log(response);
            $rootScope.loggedInStatus = false;
        });
    });
    application.factory('MyErrorHandler', function ($q, $log) {
        return function (part, lang) {
            $log.error('The "' + part + '/' + lang + '" part was not loaded.');
            return $q.when({});
        };
    });
})();