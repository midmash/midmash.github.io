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
			console.log(A);
			for (var i = 1; i < 11; i++) {
				var lat = A["response"]["venues"][i]["location"]["lat"];
				var lng = A["response"]["venues"][i]["location"]["lng"];
				var venueName = A["response"]["venues"][i]["name"];
				var checkIns = A["response"]["venues"][i]["stats"]["checkinsCount"];
				var userChecks = A["response"]["venues"][i]["stats"]["usersCount"];
        			
        			var marker = new google.maps.Marker({
        				position: new google.maps.LatLng(lat, lng),
        				title:"Marker",
					 })
					 
				marker.setMap(map);
				map.setCenter(marker.getPosition());
			
			google.maps.event.addListener(marker, 'click', function(event) {
    				map.setZoom(8);
				map.setCenter(marker.getPosition());
				
				//var venueName = ["response"]["venues"][i]["name"];
				//console.log(venueName);
					
				//var checkIns = A["response"]["venues"][i]["stats"]["checkinsCount"];
				//console.log(checkIns);
					
				//var userChecks = A["response"]["venues"][i]["stats"]["usersCount"];
  				//console.log(hereNow);
				
  					
  				document.getElementById("venue-recs").innerHTML = "Venue Name: " + "<br>" + venueName + "<br>" + "<br>" + "Number of Check-Ins: " + "<br>" + checkIns + "<br>" + "<br>" + "Number of Users to Check-In Here: " + "<br>" + userChecks;
  					//document.getElementById("venue-recs").innerHTML = checkIns;
  					//document.getElementById("venue-recs").innerHTML = hereNow;
  				});
			}
			
				
				/*google.maps.event.addListener(marker, "mouseover", function(event) {
                            		this.setIcon(A["response"]["venues"][i]["stats"]["checkinsCount"]);
                        	});

                            	google.maps.event.addListener(marker, "mouseout", function(event) {
                            		this.setIcon(A["response"]["venues"][i]["hereNow"]["count"]);
                            	});*/
			
		}
					
	}
	request.open("GET",URL,true);
	request.send();
}
