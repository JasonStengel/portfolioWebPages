 function myMap() {
	var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(32.7157, 117.1611),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
var map = new google.maps.Map(document.getElementById("#map"), mapOptions);
}