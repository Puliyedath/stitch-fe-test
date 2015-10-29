(function(){
    'use strict';
    angular.module('Products').config(['$stateProvider', function($stateProvider){
	$stateProvider.state('addProduct',{
	    url:'/products/create',
	    templateUrl: 'modules/products/views/add-product.client.view.html'
	});
    }]);
}());
