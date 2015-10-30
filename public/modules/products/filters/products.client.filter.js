(function(){
    'use strict';
    angular.module('Products').filter('dateFilter', function(){

	return function(items, property, startDate, endDate){
	    if (!items) return false;
	    
	    var output = items.filter(function(item){
		if(!startDate || !endDate){
		    return true;
		}

		if(item[property] === null)return false;

		var iDate = moment(item[property], "MM-DD-YYYY");
		var sDate = moment(new Date(startDate).toJSON(), "MM-DD-YYYY");
		var eDate = moment(new Date(endDate).toJSON(), "MM-DD-YYYY");

		if (iDate >= sDate && (iDate <= eDate)) return true ;
		return false;
	    });

	    return output;
	    
	};
    });
}());
