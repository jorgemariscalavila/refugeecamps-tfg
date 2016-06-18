// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  $(document).foundation(); 
  $('body').on('click', '#detector', detectUserLocation);
});


function notify () {
  alert('hola');
}


    var map;
    function init(){
      // initiate leaflet map
      map = new L.Map('map', { 
        center: [38,24],
        zoom: 9
      })

      L.tileLayer('https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png', {
        attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
      }).addTo(map);

      var layerUrl = 'https://mariscalavilajorge.cartodb.com/api/v2/viz/2b0a2fc2-3179-11e6-b994-0e31c9be1b51/viz.json';


      cartodb.createLayer(map, layerUrl)
        .addTo(map)
        .on('done', function(layer) {
          // change query
        }).on('error', function() {
          //log the error
        });
    }

function detectUserLocation(){
  if (navigator.geolocation) {
    var timeoutVal = 10 * 1000 * 1000;
    navigator.geolocation.watchPosition(
      mapToPosition, 
      alertError,
      { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
    );
  }
  else {
    alert("Geolocation is not supported by this browser");
  }

  function alertError(error) {
    var errors = { 
      1: 'Permission denied',
      2: 'Position unavailable',
      3: 'Request timeout'
    };
    alert("Error: " + errors[error.code]);
  }
}

function mapToPosition(position) {
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  map.setView(new L.LatLng(lat,lon), 4 );
  new L.CircleMarker([lat,lon],{radius: 4}).addTo(map);
}

