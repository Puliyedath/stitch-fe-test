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

		//var iDate = moment(new Date(item[property]), "DD-MM-YYYY");
		//var sDate = moment(new Date(startDate), "DD-MM-YYYY");
		//var eDate = moment(new Date(endDate), "DD-MM-YYYY");

		var iDate = new Date(item[property]).toJSON().slice(0,10),
		    sDate = new Date(startDate).toJSON().slice(0,10),
		    eDate = new Date(endDate).toJSON().slice(0,10);


		console.log(iDate >= sDate);
		console.log(iDate <= eDate);

		console.log('----');

		if ((iDate >= sDate) && (iDate <= eDate)) return true ;
		return false;
	    });

	    console.log(output);

	    return output;
	    
	};
    });
}());
