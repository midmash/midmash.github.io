 
var config = {
 apiKey: '1PYYLFDJI5YVYXGYCNQE4UJPB1N1B1CSZHK4LGYO0BJPEWQ2',
 authURL: 'https://foursquare.com/',
 apiURL: 'https://api.foursquare.com/'
};
  
function lookForFun() { 
	var lat = document.getElementById("input-lat").value;
	var lng = document.getElementById("input-long").value;
  /* Query foursquare API for venue recommendations near the current location. */
    $.getJSON(config.apiUrl + 'v2/venues/explore?ll=' + lat + ',' + lng + '&oauth_token=' + window.token, {}, function(data) {
      venues = data['response']['groups'][0]['items'];
      /* Place marker for each venue. */
      for (var i = 0; i < venues.length; i++) {
        /* Get marker's location */
        var latLng = new L.LatLng(
          venues[i]['venue']['location']['lat'],
          venues[i]['venue']['location']['lng']
        );
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
        	position: latLng,
        	title:"Marker"
        }
          /*.bindPopup(venues[i]['venue']['name'], { closeButton: false })
          .on('mouseover', function(e) { this.openPopup(); })
          .on('mouseout', function(e) { this.closePopup(); });*/
        marker.setMap(map);
      }
    })
  })
  
