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
  $scope.goToNearestEvent = function() {
    $scope.map.setZoom(0);
    $scope.map.setCenter($scope.fmiLocation);
    $scope.map.setZoom(16);
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

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});
