(function(){
    'use strict';
    angular.module('Products')
	.directive('addProduct', function(){
	    return {
		restrict: 'E',
		replace: true,
		templateUrl:'/modules/Products/views/add-product.client.view.html',
		scope:{
		    'onSubmit': "&"
		},
		link:function($scope){
		    $scope.submit = function(newProduct){
			console.log('in here');
			$scope.onSubmit({product: newProduct});
		    };
		}

	
	    };
	});
}());

