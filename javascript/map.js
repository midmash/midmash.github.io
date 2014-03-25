console.log("bob");
var geocoder;
var map;

initialize = function() {
	console.log("dog");
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng("Decorah,IA");
	var mapOptions = {
		center : latlng,
		zoom : 8,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
	}

	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions)
	console.log("cat");
}

function mapAddress() {
	var address = document.getElementById('address').value;
	geocoder.geocode({
		'address' : address
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			map.setZoom(13);
			lookForReddits();
		} else {
			alert('Search was not successful because: ' + status);
		}
	});
}


/*Clears the highlighting on all the tweets in the feed.
clearHighlights = function() {
	tweets = document.getElementsByClassName("tweet");
	for (var i = 0; i < tweets.length; i++) {
		tweets[i].style.backgroundColor = 'white';
	}
}*/

function lookForReddits() {
	bd.getRedditsAndUpdateFeed(map.getCenter().lat(), map.getCenter().lng(), 1)
}
google.maps.event.addDomListener(window, 'load', initialize);
