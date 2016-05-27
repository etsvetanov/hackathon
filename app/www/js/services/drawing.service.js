angular.module('starter.controllers')
.factory('drawing', function() {
  var self = this,
      privateLogic = {},
      service = {};

  service.drawCircle = drawCircle;
  service.addCircleOnClick = addCircleOnClick;
  //location e.g.: 44.4751188, -67.5354019
  function drawCircle(map, latitude, longitude, radius) {
        var circle = new google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: map,
                    center: new google.maps.LatLng(latitude, longitude),
                    radius: radius
                  });
        console.log("drawing circle at " + latitude + "," + longitude + ".");
    return circle;
  }

  function addCircleOnClick(circle, onClickFunc){
    google.maps.event.addListener(circle, 'click', function(ev) {
            onClickFunc(circle);
        });
  }

  return service;
});