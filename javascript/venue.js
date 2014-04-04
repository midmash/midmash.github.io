var marker;
var venueName;
var checkIns;
var userChecks;

function getVenue() {
	var request = new XMLHttpRequest();
	var URL = "https://api.foursquare.com/v2/venues/search?near=" + document.getElementById('address').value + "&client_id=1PYYLFDJI5YVYXGYCNQE4UJPB1N1B1CSZHK4LGYO0BJPEWQ2&client_secret=WLK1VTXZKQ41GGOI1BZUECIA0UT00QSADMBBKKCIS5VCE5IW&v=20140401";
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status==200);
		{
			var A = JSON.parse(request.responseText);
			for (var i = 1; i < 11; i++) {
				var lat = A["response"]["venues"][i]["location"]["lat"];
				var lng = A["response"]["venues"][i]["location"]["lng"];
				
				var venueName = A["response"]["venues"][i]["name"];
				var checkIns = A["response"]["venues"][i]["stats"]["checkinsCount"];
				var userChecks = A["response"]["venues"][i]["stats"]["usersCount"];
				
        			
        			var marker = new google.maps.Marker({
        				position: new google.maps.LatLng(lat, lng),
        				title: "Venue Name: " + venueName + "\n" + "Number of Check-In's: " + checkIns + "\n" + "Number of Users to Check-In Here: " + userChecks
					})
					 
				InfoWindow(marker.getPosition());	 
				marker.setMap(map);
				map.setCenter(marker.getPosition());
				map.setZoom(15);
			}
			
			function InfoWindow(marker) {
				var infoWindow = new google.maps.InfoWindow({
					content: "Venue Name: " + venueName + "<br>" + "Number of Check-In's: " + checkIns + "<br>" + "Number of Users to Check-In Here: " + userChecks,
					map: map,
				})
				
				new google.maps.event.addListener(marker, 'click', function() {
					infoWindow.open(map, marker);
				})
				
				new google.maps.event.addListener(marker, 'click', function() {
					infoWindow.close();
				})
			}

			google.maps.event.addDomListener(window, 'load');
			
		}
	}
	request.open("GET",URL,true);
	request.send();
}
