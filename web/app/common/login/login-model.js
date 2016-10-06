(function () {
    angular.module("basicApp").factory('basicApp.login.loginModelService', function () {
       	return {
       		login : {
       			userName : "userId",
       			password : "password"
       		}
       	}
    });
})();