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
			//console.log(A);
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
					 
				marker.setMap(map);
				map.setCenter(marker.getPosition());
				map.setZoom(8);
				InfoWindow(marker);
				
				//var infowindow = new google.maps.InfoWindow({
				//	content: "Venue Name: " + venueName + "<br>" + "Number of Check-In's: " + checkIns + "<br>" + "Number of Users to Check-In Here: " + userChecks,
				//	map: map,
				//})
				
				//infowindow.open(map, marker);
			}
			
			//function markInfo(map) {
				
			//}
			
			
			function InfoWindow(marker) {
				var infoWindow = new google.maps.InfoWindow({
					content: "Venue Name: " + venueName + "<br>" + "Number of Check-In's: " + checkIns + "<br>" + "Number of Users to Check-In Here: " + userChecks,
					map: map,
					position: marker.getPosition()
				})
				
				new google.maps.event.addListener(marker, 'click', function(event) {
					infoWindow.open(map, marker);
				})
				
				new google.maps.event.addListener(marker, 'click', function(event) {
					infoWindow.close();
				})
			}
			
			
			//for marker in map:
			
			//var infowindow = new google.maps.InfoWindow({
			//		content: "Venue Name: " + venueName + "<br>" + "Number of Check-In's: " + checkIns + "<br>" + "Number of Users to Check-In Here: " + userChecks,
			//		map: map
			//		})
			
			//google.maps.event.addListener(marker, "mouseover", function(event) {
			//	infowindow.open(map, marker);
			//});
			
			//google.maps.event.addListener(marker, "mouseclose", function(event) {
			//	infowindow.close(map, marker);
			//});
		}
	}
	request.open("GET",URL,true);
	request.send();
}

			//infowindow.open(map, marker);
			
			//google.maps.event.addListener(marker, 'click', function(event) {
    			//	map.setZoom(8);
				//map.setCenter(marker.getPosition());
			//	infowindow.open(map, marker);
  					
  					//document.getElementById("venue-recs").innerHTML = "Venue Name: " + "<br>" + venueName + "<br>" + "<br>" + "Number of Check-Ins: " + "<br>" + checkIns + "<br>" + "<br>" + "Number of Users to Check-In Here: " + "<br>" + userChecks;
  			//	});
  				
  				
			
			
				
				/*google.maps.event.addListener(marker, "mouseover", function(event) {
                            		this.setIcon(A["response"]["venues"][i]["stats"]["checkinsCount"]);
                        	});

                            	google.maps.event.addListener(marker, "mouseout", function(event) {
                            		this.setIcon(A["response"]["venues"][i]["hereNow"]["count"]);
                            	});*/
			
