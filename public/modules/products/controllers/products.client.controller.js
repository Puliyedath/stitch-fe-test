(function(){
    angular.module('Products')
	.controller('productsCtrl', ['$scope','productService', '$state', function($scope, productService, $state){

	    (function(){
		angular.element("#fromDate" ).datepicker();
		angular.element("#toDate" ).datepicker();
	    }());

	    productService.changedVariants = [];
	    
	    //getting the list of products
	    $scope.products = (function(){
		var output = productService.get({
		    method:'get',
		    path:"/admin/products.json"
		},function(response){
		    $scope.products = response.products;
		    $scope.product = response.products[0];
		    console.log($scope.products);
		});
	    })();

	    $scope.select = function(product){
		$scope.product = product;
	    };

	    $scope.edit = function(variant){
		console.log('inside edit');
		variant.edit = true;
		$scope.product.edit = true;
		productService.changedVariants.push(variant);
	    };

	    $scope.isEdit = function(){
		return (!($scope.product && $scope.product.edit) || false);
	    };

	    $scope.update=function(){
		var data = {};
		data.product = { "id": $scope.product.id, "variants": $scope.product.variants };
		console.log(data.product);
		

		productService.save({
		    method:'post',
		    path:"/admin/products/" + $scope.product.id+ ".json",
		    reqMethod:'PUT'
		} , data, function(response){
		    $scope.product.edit = false;
		    angular.forEach(productService.changedVariants, function(value){
			value.edit = false;
		    });
		    productService.changedVariants = [];
		}, function(error){
		    console.log('error is' + error);
		});
		
	    };

	    $scope.submit=function(product){
		var data = {"product": product};
		productService.save({
		    method:'post',
		    path:"/admin/products.json",
		    reqMethod:'POST'
		} , data, function(response){
		    $scope.products.push(response.product);
		    $scope.product = response.product;
		    $state.go('home');
		}, function(error){
		    console.log('error is' + error);
		});
	    };

	    $scope.hasImages = function(){
		return ($scope.product && $scope.product.images.length > 0);
	    };

	    $scope.dateFilter =  function(property, startDate, endDate){
		
		return function(item){

		    if(!startDate || !endDate){
			return true;
		    }

		    if(item[property] === null)return false;
		    console.log(property, startDate, endDate);

		    var iDate = moment(item[property], "MM-DD-YYYY");
		    var sDate = moment(new Date(startDate).toJSON(), "MM-DD-YYYY");
		    var eDate = moment(new Date(endDate).toJSON(), "MM-DD-YYYY");
		    console.log(iDate, sDate, eDate);
		    if (iDate >= sDate && iDate <= eDate) return true ;
		    return false;
		};
	    };

	    $scope.delete=function(product){
		console.log(product);
		productService.save({
		    method:'post',
		    path:"/admin/products/" + product.id + ".json",
		    reqMethod:'DELETE'
		},{},function(response){
		    //remove the note from the scope object
		    for(var i in $scope.products){
			if($scope.products[i] === product){
			    $scope.products.splice(i,1);
			}
			$scope.product=$scope.products[0];
			$state.go('home');
		    }
		    $state.go('home');
		}, function(error){
		    console.log('error is' + error);
		});
	    };

	}]);
}());
