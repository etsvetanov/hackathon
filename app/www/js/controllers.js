angular.module('starter.controllers', [])

.controller('StartCtrl', function($scope, $state) {
  $state.go('login');
})

.controller('MapCtrl', function($scope, $ionicLoading) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };


  ///---marks FMI location with circle
  var initialLocation = {
    latitude: 42.6744756,
    longitude: 23.330369
  };
  $scope.fmiLocation = new google.maps.LatLng(initialLocation.latitude, initialLocation.longitude);
  //this should work but it doesnt:
  // navigator.geolocation.getCurrentPosition(function(position) {
  //     initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude );
  //  });
  $scope.markedLocations = [initialLocation,];
  ///^------end

  function animateMapZoomTo(map, targetZoom) {
        var currentZoom = arguments[2] || map.getZoom();
        if (currentZoom != targetZoom) {
            google.maps.event.addListenerOnce(map, 'zoom_changed', function (event) {
                animateMapZoomTo(map, targetZoom, currentZoom + (targetZoom > currentZoom ? 1 : -1));
            });
        setTimeout(function(){ map.setZoom(currentZoom) }, 128);
        }
      }

  $scope.goToNearestEvent = function() {
    $scope.map.setZoom(4);
    $scope.map.setCenter($scope.fmiLocation);
    animateMapZoomTo($scope.map, 16);
  }
  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    console.log('Got pos', pos);
    navigator.geolocation.getCurrentPosition(function (pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});
