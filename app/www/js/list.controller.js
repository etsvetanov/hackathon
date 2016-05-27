angular.module('starter.controllers')

    .controller('ListCtrl', function ($scope) {
        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;
        $scope.items = [
            'Movies',
            'Geography',
            'Programming'
        ];

        $scope.func = function () {
            debugger;
        }
    });



