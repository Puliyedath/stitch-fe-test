var express = require('express');
var request = require('request');
var router = express.Router();

var API_KEY = '81b99b56d20757efb998799f335b3253';
var PASSWD = '753867aa25fe340b154cfd521e5d3e68';
var STORE_NAME = 'superhumangoods';

router.get('/get', function(req, res) {
    var path = req.query.path;
    res.set({'Content-Type': 'application/json'});
    request('https://' + API_KEY + ':' + PASSWD + '@' + STORE_NAME + '.myshopify.com' + path,
	    function (error, response, body) {
		if (!error && response.statusCode == 200) {
		    res.status(200).send(body);
		}
	    });
});

router.post('/post', function(req, res){
    console.log('********************************************************************************');

    var path = req.query.path,
	requestData = req.body;

    console.log(requestData);

    request({
	url: 'https://' + API_KEY + ':' + PASSWD + '@' + STORE_NAME + '.myshopify.com' + path,
	method: req.query.reqMethod || "POST",
	json: true,
	headers: {
	    "content-type": "application/json"
	},
	body: JSON.stringify(requestData)
    }, function (error, response, body) {

	console.log(response.statusCode);

	if (!error && response.statusCode === 200 || response.statusCode === 201) {
	    res.status(200).send(body);
	} else {
	    console.log(error);
	    //console.log(response);
	    res.status(500).send(body);
	}
    });
});

module.exports = router;
