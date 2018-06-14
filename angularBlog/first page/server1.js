function myMap() {
var mapOptions = {
    center: {lat:40.792896, lng:43.837533},
    zoom: 15,
    
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var marker = new google.maps.Marker({
          position: {lat:40.792896, lng:43.837533},
          map: map
        });
}
