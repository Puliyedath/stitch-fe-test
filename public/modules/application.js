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
	angular.element("#fromDate" ).datepicker();
	angular.element("#toDate" ).datepicker();
	angular.element('.icon').click(function(){
	    angular.element('div.pos-absolute').toggleClass('vanish');
	    angular.element('.padded-div').toggleClass('move');
	    angular.element('form').toggleClass('move');
	});
    });
    
}());
