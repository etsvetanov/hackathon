angular.module('starter.controllers')

    .controller('ListCtrl', function ($scope, teamsService) {
        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;
        $scope.items = [
            {name: 'Movies', id: '1'},
            {name: 'Programming', id: '2'},
            {name: 'Gaming', id: '3'}
        ];

        $scope.chooseTeam = function (id) {
            debugger;
            teamsService.joinTeam(id);
        }
    });



