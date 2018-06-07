var async = require('async');


var addressInformationList = [
'1200 Folsom, San Francisco',
'1400 Staten, Oakland''
];


function computeLocationQueryUrl(address) {
  
	// store this value in an environment variable and then access like this: env['mapbox_access_token']
	var access_token = env['mapbox_access_token'];
	return `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?country=us&access_token=${mapbo_access_token}`;

}


var locationQueryUrls = addressInformationList.map(function(addressInformation) {
	return computeLocationQueryUrl(addressInformation)
});


var tasks = locationQueryUrls.map(function(queryUrl) {
	return  function (callback) {
		var successFn = function (res) {
			var json = res.body
			callback(null, json)
		};
		var errorFn  = function (e) {
			//do whatever with the errors
			callback(e) 
		};
		axios.request(queryUrl, successFn, errorFn)
	}

})


var locations = async.parallel(tasks)


