console.log('Yet another Hello world');

var map = null;
var myInfoWindow;

var placesOfInterest = [
    { name: 'Charme da paulista', lat: -23.562172, lng: -46.655794 },
    { name: 'The Blue Pub', lat: -23.563112, lng: -46.650338 },
    { name: 'Veloso', lat: -23.585107, lng: -46.635219 },
    { name: 'Let\'s Beer', lat: -23.586508, lng: -46.641739 },
    { name: 'O\'Malley\'s', lat: -23.558296, lng: -46.665923 },
    { name: 'Finnegan\'s', lat: -23.559547, lng: -46.676794 },
    { name: 'Partisans', lat: -23.561049, lng: -46.682555 },
    { name: 'Morrison', lat: -23.555106, lng: -46.690883 },
    { name: 'Cão Véio', lat: -23.558130, lng: -46.679508 },
    { name: 'Cervejaria Nacional', lat: -23.564740, lng: -46.690641 },
    { name: 'Brewdog', lat: -23.561309, lng: -46.693935 },
    { name: 'Rei das Batidas', lat: -23.570613, lng: -46.705977 }
];

const customIcon = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#F7B217',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};

function addMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(place.lat, place.lng),
        icon: customIcon,
        title: place.name
    });
    
    var content = place.name;
    
    marker.addListener('click', function() {
        createInfoWindow(this, myInfoWindow, content);
        
        console.log(this.icon);
    });

}

function createInfoWindow(marker, infowindow, content){
    if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent(content);
          
          changeFillColor(marker, '#FFFFFF');
          infowindow.open(map, marker);
          
          var actualMarker = marker;
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick',function(){
            changeFillColor(actualMarker, '#F7B217');
            infowindow.setMarker = null;
          });
        }
}

function changeFillColor(marker, color){
    marker.setMap(null);
    
    marker.icon.fillColor = color;
    marker.setMap(map);
}

// add all markers
function addAllMarkers(places) {
    for (var i=0 ; i < places.length ; i++) {
        addMarker(places[i]);
    }
}

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.562172, -46.655794),
        gestureHandling: 'greedy',
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        },
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        }

    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    myInfoWindow = new google.maps.InfoWindow();
    
    addAllMarkers(placesOfInterest);    
    
    
}