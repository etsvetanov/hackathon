angular.module('starter.controllers')

.controller('ResultCtrl', function($scope, $q, $timeout, sendFromQuizQuestions) {

    var initialLocation = {
      latitude: 42.6744756,
      longitude: 23.330369
    };

    $scope.mapCreated = function(map) {
      $scope.map = map;

      $scope.fmiLocation = new google.maps.LatLng(initialLocation.latitude, initialLocation.longitude);
      $scope.map.setZoom(16);
      $scope.map.setCenter($scope.fmiLocation);

    };

    var teamPictureUrls = [
            'http://gotagapi.azurewebsites.net/Assets/Pictures/TeamAvatar/MoviesLogo.png',
            'http://gotagapi.azurewebsites.net/Assets/Pictures/TeamAvatar/ProgrammingLogo.jpg',
            'http://gotagapi.azurewebsites.net/Assets/Pictures/TeamAvatar/GamingLogo.png'];

    $(".nearest-event").hide();
    var winningTeamId;
    var checkForEnd = function() {
              sendFromQuizQuestions
                .CheckForEndOfEvent()
                .then(function successCallback(response) {
                    if(JSON.parse(response.data)=="true") {
                        getResult();
                        //clearInterval(setIntervalFunc);
                    }
                    console.log(response);
                  }, function errorCallback(response) {
                    console.log('smthn failed miserably');
                });
            }

       var setIntervalFunc = setInterval(checkForEnd, 10000);

    var getResult = function() {
          sendFromQuizQuestions
            .getEventResult()
            .then(function successCallback(response) {
                winningTeamId = response.data.Winner;
                var winningTeamLogoUrl = teamPictureUrls[winningTeamId-1];
                var marker = new google.maps.Marker({
                      position: $scope.fmiLocation,
                      map: $scope.map,
                      icon: winningTeamLogoUrl
                    });
                console.log(response); //display winner
              }, function errorCallback(response) {
                console.log('smthn failed miserably');
            });
        }
});
