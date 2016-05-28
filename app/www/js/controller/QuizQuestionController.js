angular.module('starter.controllers')
    .controller('QuizQuestionCtrl', function ($scope, $q, $timeout, sendFromLogin, $rootScope, $state, Questions) {
        $scope.questions = Questions;

    });
