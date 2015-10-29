(function(){
    'use strict';
    angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationVenderDependencies);

    angular.module(ApplicationConfiguration.applicationModuleName)
	.config(['$locationProvider',
		 function($locationProvider){
		     $locationProvider.hashPrefix('!');
		 }]);

    //bootstrapping the angular application - the module has to exist before that
    angular.element(document).ready(function(){
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
    });
    
}());
