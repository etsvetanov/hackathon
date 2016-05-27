angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&',
      onMyClick: '&',
      markedLocation: '=',
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          //goto mistake island
          center: new google.maps.LatLng(44.4751188, -67.5354019),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);
        $scope.map = map;
        $scope.onCreate({map: map});
        
        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });

        $scope.ready();
      }
      
      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }   
    },
    controller: function($scope, drawing) {

      function alertCircle(circle) { 
       console.log("clicked on circle with radius:" + circle.radius);
      }

      $scope.ready = function() {
        var circle = drawing.drawCircle($scope.map, 44.4751188, -67.5354019, 40);
        drawing.addCircleOnClick(circle, alertCircle);
      }
    }
  }
});
