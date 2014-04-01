var geocodertwo; 
 
var config = {
 apiKey: '1PYYLFDJI5YVYXGYCNQE4UJPB1N1B1CSZHK4LGYO0BJPEWQ2',
 authURL: 'https://foursquare.com/',
 apiURL: 'https://api.foursquare.com/'
};

function getVenue() {
	var request = new XMLHttpRequest();
	var URL = "https://api.foursquare.com/v2/venues/search?near=Decorah,IA&client_id=1PYYLFDJI5YVYXGYCNQE4UJPB1N1B1CSZHK4LGYO0BJPEWQ2&client_secret=WLK1VTXZKQ41GGOI1BZUECIA0UT00QSADMBBKKCIS5VCE5IW&v=20140401";
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status==200);
		{
			var A = JSON.parse(request.responseText);
			console.log(A);
		}
	}
	request.open("GET",URL,true);
	request.send();
};  
