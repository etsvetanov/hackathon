angular.module('starter.controllers')

    .controller('QuizQuestionCtrl', function ($scope, $q, $timeout, sendFromLogin, $rootScope, $state, Questions) {
        var shuffle = function(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }
        $scope.choice = null;
        $scope.originalQuestions = [];
        $scope.questions = [];
        angular.copy(Questions, $scope.questions);
        angular.copy(Questions, $scope.originalQuestions);
        shuffle($scope.questions);
        $scope.currentQuestionIndex = 0;
        $scope.currentQuestion = $scope.questions[$scope.currentQuestionIndex];

        $scope.originalQuestions.forEach(function(el, i) {
          el.id = i;
        })
        $scope.getNextQuestion =  function() {
          $scope.currentQuestion = $scope.questions[$scope.currentQuestionIndex + 1];
        }

    });
