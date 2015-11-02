(function(){
    'use strict';
    angular.module('Products')
	.directive('addProduct', function(){
	    return {
		restrict: 'E',
		templateUrl:'/modules/Products/views/add-product.client.view.html',
		scope:{
		    onProdSubmit: '&'
		},
		controller:function(scope){
		    scope.submit = function(newProduct){
			scope.onProdSubmit({newProduct: newProduct});
		    };
		}

	
	    };
	});
}());

