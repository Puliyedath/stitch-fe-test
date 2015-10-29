(function(){
    angular.module('Products')
	.factory('productService', ['$resource', function($resource){
	    return  $resource('/shopify/:method');
	}]);
}());
