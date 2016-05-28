angular.module('starter.controllers')

    .controller('ListCtrl', function ($scope, $rootScope, $state, teamsService) {

        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;
        $rootScope.teamName = null;
        $scope.items = [
            {name: 'Stormpoopers', id: '1', category: 'Movies', logoPath: 'http://gotagapi.azurewebsites.net/Assets/Pictures/TeamAvatar/MoviesLogo.png'},
            {name: '.NOT', id: '2', category: 'Programming', logoPath: 'http://gotagapi.azurewebsites.net/Assets/Pictures/TeamAvatar/ProgrammingLogo.jpg'},
            {name: 'My wife for Aiur', id: '3', category: 'Gaming', logoPath: 'http://gotagapi.azurewebsites.net/Assets/Pictures/TeamAvatar/GamingLogo.png'}
        ];
        
        $scope.chooseTeam = function (id) {

            teamsService.joinTeam(id)
                .then(function successCallback(response) {
                    $rootScope.teamName = response.data.Team.TeamName;
                    $rootScope.userPictureSource = 'http://gotagapi.azurewebsites.net' + response.data.AvatarPath;
                    $rootScope.teamPictureSource = 'http://gotagapi.azurewebsites.net' + response.data.Team.TeamPicturePath;
                    console.log($rootScope.team);
                    $state.go('map');
                }, function errorCallback(response) {
                    console.log('smthn failed miserably');
                });

        }
    });
