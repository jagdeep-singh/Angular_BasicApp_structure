'use strict';
(function () {
    angular.module('basicApp').config( function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    "": {
                        controller: 'basicApp.login.loginController', // This view will use AppCtrl loaded below in the resolve
                        templateUrl: 'app/common/login/login.tpl.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        console.log("loading login controller");
                        return $ocLazyLoad.load([
                            'basicApp.login.loginModelService',
                            'basicApp.services.apiUrlConfig',
                            'basicApp.services.apiMethods',
                            'basicApp.login.loginController'
                        ]);
                    }]
                }
            })
            .state('signUp', {
                url: '/signUp',
                views: {
                    "": {
                        controller: 'basicApp.signUp.signUpController', // This view will use AppCtrl loaded below in the resolve
                        templateUrl: 'app/common/signUp/signUp.tpl.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        console.log("loading signUp controller");
                        return $ocLazyLoad.load(['basicApp.signUp.signUpController']);
                    }]
                }
            })
            .state('home', {
                url: '/home',
                views: {
                    "": {
                        controller: 'basicApp.home.homeController', // This view will use AppCtrl loaded below in the resolve
                        templateUrl: 'app/common/home/home.tpl.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        console.log("loading home controller");
                        return $ocLazyLoad.load(['basicApp.home.homeController']);
                    }]
                }
            })
            .state('profile', {
                url: '/profile',
                views: {
                    "": {
                        controller: 'basicApp.user-dashboard.profile.profileController', // This view will use AppCtrl loaded below in the resolve
                        templateUrl: 'app/common/user-dashboard/profile/profile.tpl.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        console.log("loading profile controller");
                        return $ocLazyLoad.load(['basicApp.user-dashboard.profile.profileController']);
                    }]
                }
            })
            .state('changepassword', {
                url: '/changepassword',
                views: {
                    "": {
                        controller: 'basicApp.user-dashboard.changepassword.changePasswordController', // This view will use AppCtrl loaded below in the resolve
                        templateUrl: 'app/common/user-dashboard/changepassword/changepassword.tpl.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        console.log("loading changepassword controller");
                        return $ocLazyLoad.load([
                            'basicApp.services.apiUrlConfig',
                            'basicApp.services.apiMethods',
                            'basicApp.user-dashboard.changepassword.changePasswordController'
                        ]);
                    }]
                }
            })
            .state('resetpassword', {
                url: '/resetpassword/:uuid',
                views: {
                    "": {
                        controller: 'basicApp.user-dashboard.changepassword.changePasswordController', // This view will use AppCtrl loaded below in the resolve
                        templateUrl: 'app/common/user-dashboard/changepassword/changepassword.tpl.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        console.log("loading changepassword controller");
                        return $ocLazyLoad.load([
                            'basicApp.services.apiUrlConfig',
                            'basicApp.services.apiMethods',
                            'basicApp.user-dashboard.changepassword.changePasswordController'
                        ]);
                    }]
                }
            });
        //$locationProvider.html5Mode(true);
        //$urlRouterProvider.otherwise('/home');
    });
})();