function getVenue() {
	var request = new XMLHttpRequest();
	var URL = "https://api.foursquare.com/v2/venues/search?near=Decorah,IA&client_id=1PYYLFDJI5YVYXGYCNQE4UJPB1N1B1CSZHK4LGYO0BJPEWQ2&client_secret=WLK1VTXZKQ41GGOI1BZUECIA0UT00QSADMBBKKCIS5VCE5IW&v=20140401";
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status==200);
		{
			var A = JSON.parse(request.responseText);
			for (var i = 0; i < 10; i++) {
				console.log(A["response"]["venues"][i]["name"]);
				var lat = A["response"]["venues"][i]["location"]["lat"];
				var lng = A["response"]["venues"][i]["location"]["lng"];
        			/* Build icon for each icon */
        			/*var leafletIcon = L.Icon.extend({
          				iconUrl: A['venues'][i]['categories'][0]['icon'],
        				shadowUrl: null,
          				iconSize: new L.Point(32,32),
          				iconAnchor: new L.Point(16, 41),
        				popupAnchor: new L.Point(0, -51)
					});*/
        			var marker = new google.maps.Marker({
        				position: new google.maps.LatLng(lat, lng),
        				title:"Marker"
					 })
				marker.setMap(map);
			}
		}
					
          /*.bindPopup(venues[i]['venue']['name'], { closeButton: false })
          .on('mouseover', function(e) { this.openPopup(); })
          .on('mouseout', function(e) { this.closePopup(); });*/
	}
	request.open("GET",URL,true);
	request.send();
}