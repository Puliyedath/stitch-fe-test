var ApplicationConfiguration = (function(){

    'use strict';
    var applicationModuleName = "SuperManGoods";
    var applicationVenderDependencies = ["ngResource","ui.router"];

    var registerModule = function(name){
	var module = angular.module(name, []);
	angular.module(applicationModuleName).requires.push(name);
    };

    return {
	applicationVenderDependencies: applicationVenderDependencies,
	applicationModuleName: applicationModuleName,
	registerModule : registerModule
    };

}());
