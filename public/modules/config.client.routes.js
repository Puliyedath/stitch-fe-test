(function(){
    'use strict';
    angular.module('SuperManGoods')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	    //catch all route
	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('home', {
		url:'/',
		templateUrl: 'modules/views/home.client.view.html'
	    });
    }]);
}());
