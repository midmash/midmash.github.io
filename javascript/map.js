var geocoder;
var map;

initialize = function() {
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(43.30, -91.78);
	var mapOptions = {
		center : latlng,
		zoom : 8,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
	}

	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions)
}

function mapAddress() {
	var address = document.getElementById('address').value;
	geocoder.geocode({
		'address' : address
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			map.setZoom(13);
			getVenue();
		} else {
			alert('Search was not successful because: ' + status);
		}
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
