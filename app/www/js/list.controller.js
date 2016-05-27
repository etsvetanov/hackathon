angular.module('starter.controllers')

    .controller('ListCtrl', function ($scope, $rootScope, sendFromTeam, $state) {
        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;
        $rootScope.teamName = null;
        $scope.items = [
            'Movies',
            'Geography',
            'Programming'
        ];

        $scope.func = function (item) {
          sendFromTeam.TeamChosen(item)
            .then(function successCallback(response) {
                $rootScope.teamName = response.data.Team.TeamName;
                $rootScope.userPictureSource = 'http://gotag.azurewebsites.net/' + response.data.AvatarPath;
                $rootScope.teamPictureSource = 'http://gotag.azurewebsites.net/' + response.data.Team.TeamPicturePath;
                console.log($rootScope.team);
                $state.go('map');
              }, function errorCallback(response) {
                console.log('smthn failed miserably');
            });;
        }
    });
