angular.module('starter.controllers')

    .controller('ListCtrl', function ($scope, $rootScope, $state, teamsService) {

        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;
        $rootScope.teamName = null;
        $scope.items = [
            {name: 'Movies', id: '1'},
            {name: 'Programming', id: '2'},
            {name: 'Gaming', id: '3'}
        ];

        $scope.chooseTeam = function (id) {

            teamsService.joinTeam(id)
            .then(function successCallback(response) {
                $rootScope.teamName = response.data.Team.TeamName;
                $rootScope.userPictureSource = 'http://gotag.azurewebsites.net/' + response.data.AvatarPath;
                $rootScope.teamPictureSource = 'http://gotag.azurewebsites.net/' + response.data.Team.TeamPicturePath;
                console.log($rootScope.team);
                $state.go('map');
            }, function errorCallback(response) {
                console.log('smthn failed miserably');
            });

        }
    });
