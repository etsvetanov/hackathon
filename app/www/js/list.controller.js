angular.module('starter.controllers')

    .controller('ListCtrl', function ($scope, $rootScope, sendFromTeam, $state) {
        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;
        $rootScope.team = null;
        $scope.items = [
            'Movies',
            'Geography',
            'Programming'
        ];

        $scope.func = function (item) {
          sendFromTeam.TeamChosen(item)
            .then(function successCallback(response) {
                $rootScope.team = response.data.Team.TeamName;
                console.log($rootScope.team);
                $state.go('map');
              }, function errorCallback(response) {
                console.log('smthn failed miserably');
            });;
        }
    });
