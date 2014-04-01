var geocodertwo; 
 
var config = {
 apiKey: '1PYYLFDJI5YVYXGYCNQE4UJPB1N1B1CSZHK4LGYO0BJPEWQ2',
 authURL: 'https://foursquare.com/',
 apiURL: 'https://api.foursquare.com/'
};
  
function lookForFun() { 
	geocodertwo = new google.maps.Geocoder();
	var latlngtwo = new google.maps.LatLng(document.getElementById('address').value);
	var lat = latlngtwo.lat();
	var lng = latlngtwo.lng();
  /* Query foursquare API for venue recommendations near the current location. */
    $.getJSON(config.apiUrl + 'v2/venues/explore?ll=' + lat + ',' + lng + '&oauth_token=' + window.token, {}, function(data) {
      venues = data['response']['groups'][0]['items'];
      /* Place marker for each venue. */
      for (var i = 0; i < venues.length; i++) {
        /* Get marker's location */
        var latLngthree = new google.maps.LatLng(venues[i]['venue']['location']['lat'], venues[i]['venue']['location']['lng']);
        /* Build icon for each icon */
        var leafletIcon = L.Icon.extend({
          iconUrl: venues[i]['venue']['categories'][0]['icon'],
          shadowUrl: null,
          iconSize: new L.Point(32,32),
          iconAnchor: new L.Point(16, 41),
          popupAnchor: new L.Point(0, -51)
        });
        var icon = new leafletIcon();
        var marker = new google.maps.Marker({
        	position: latLngthree,
        	title:"Marker"
        });
          /*.bindPopup(venues[i]['venue']['name'], { closeButton: false })
          .on('mouseover', function(e) { this.openPopup(); })
          .on('mouseout', function(e) { this.closePopup(); });*/
        marker.setMap(map);
      }
    })
  }
  
