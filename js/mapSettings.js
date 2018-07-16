$(document).ready(function() {
function initialize() {
			var mapLatlng = new google.maps.LatLng(50.393272, 30.615095);
			var mapOptions = {
			  zoom: 16,
			  center: mapLatlng,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			var marker = new google.maps.Marker({
				position: mapLatlng,
				map: map,
			 	title:"Happy Family"
			 });
		}
		google.maps.event.addDomListener(window, 'load', initialize);
    });