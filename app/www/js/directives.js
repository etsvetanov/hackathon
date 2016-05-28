angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&',
      onMyClick: '&',
      markedLocations: '=',
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
    controller: function($scope, $state, drawing) {

    function animateMapZoomTo(map, targetZoom) {
        var currentZoom = map.getZoom();
        if (currentZoom != targetZoom) {
            google.maps.event.addListenerOnce(map, 'zoom_changed', function (event) {
                animateMapZoomTo(map, targetZoom, currentZoom + (targetZoom > currentZoom ? 1 : -1));
            });
        setTimeout(function(){ map.setZoom(currentZoom) }, 80);
        }
      }

      function alertCircle(circle) {
       console.log("clicked on circle with radius:" + circle.radius);
       $state.go('quizQuestion');
      }
      //44.4751188, -67.5354019
      $scope.ready = function() {
        if($scope.markedLocations){
          var locs = $scope.markedLocations;
          for(loc in locs){
            var circle = drawing.drawCircle($scope.map, locs[loc].latitude, locs[loc].longitude, 40);
            drawing.addCircleOnClick(circle, alertCircle);
          }
        }
      }
    }
  }
});
