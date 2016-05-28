angular.module('starter.controllers')

    .controller('QuizQuestionCtrl', function ($scope, $q, $timeout, sendFromLogin, $rootScope, $state, Questions, sendFromQuizQuestions) {
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
        $scope.checkedObj = {
          "checkedA" : false,
          "checkedB" : false,
          "checkedC" : false
        }
        $scope.enableNext = false;
        $scope.choiceCorrect = false;
        $scope.disabledAll = false;
        $scope.elWithCorrectAnswer = null;
        $scope.targetedElement  = null;
        $scope.originalQuestions = [];
        $scope.questions = [];
        $scope.lastChoice = null;
        $scope.lastChoiceOccurence = 1;
        angular.copy(Questions, $scope.questions);
        angular.copy(Questions, $scope.originalQuestions);
        shuffle($scope.questions);
        $scope.currentQuestionIndex = 0;
        $scope.currentQuestion = $scope.questions[$scope.currentQuestionIndex];

        $scope.originalQuestions.forEach(function(el, i) {
          el.id = i;
        })
        $scope.getNextQuestion =  function() {
          if ($scope.choiceCorrect) {
            sendFromQuizQuestions.SubmitAnswer(true);
          }
          if ($scope.elWithCorrectAnswer) {
            $scope.disabledAll = true;
            angular.element($scope.elWithCorrectAnswer).addClass('blncColor');
          }
          else {
            angular.element($scope.targetedElement).addClass('assertColor');
          }
          $timeout(function(){
            $scope.disabledAll = false;
            $scope.choice = false;
            $scope.checkedObj = {
              "checkedA" : false,
              "checkedB" : false,
              "checkedC" : false
            }
            $scope.currentQuestion = $scope.questions[$scope.currentQuestionIndex + 1];
            angular.element($scope.elWithCorrectAnswer).removeClass('blncColor');
            angular.element($scope.targetedElement).removeClass('assertColor');
            $scope.elWithCorrectAnswer = null;
            $scope.targetedElement = null;
          }, 150);
        }

        $scope.prepareAnswer = function ($event, answer) {
          $scope.targetedElement = $event.currentTarget;
          if (answer == 'Qa' && $scope.lastChoice != answer) {
            $scope.checkedObj = {
              "checkedA" : true,
              "checkedB" : false,
              "checkedC" : false
            }
          }else if(answer == 'Qa' && $scope.lastChoice == answer) {
            $scope.checkedObj = {
              "checkedA" : false,
              "checkedB" : false,
              "checkedC" : false
            }
          }

          if (answer == 'Qb' && $scope.lastChoice != answer) {
            $scope.checkedObj = {
              "checkedA" : false,
              "checkedB" : true,
              "checkedC" : false
            }
          } else if(answer == 'Qb' && $scope.lastChoice == answer) {
            $scope.checkedObj = {
              "checkedA" : false,
              "checkedB" : false,
              "checkedC" : false
            }
          }

          if (answer == 'Qc' && $scope.lastChoice != answer) {
            $scope.checkedObj = {
              "checkedA" : false,
              "checkedB" : false,
              "checkedC" : true
            }
          } else if(answer == 'Qc' && $scope.lastChoice == answer) {
            $scope.checkedObj = {
              "checkedA" : false,
              "checkedB" : false,
              "checkedC" : false
            }
          }

          if ($scope.currentQuestion.Qr == answer) {
            $scope.choiceCorrect = true;
            $scope.elWithCorrectAnswer = $event.currentTarget;
          }
          else {
            $scope.choiceCorrect = false;
          }

          if ($scope.checkedObj.checkedA == false &&
            $scope.checkedObj.checkedB == false &&
            $scope.checkedObj.checkedC == false) {
              $scope.enableNext = false;
          } else {
            $scope.enableNext = true;
          }

          if ($scope.lastChoiceOccurence == 1) {
            $scope.lastChoice = answer;
            $scope.lastChoiceOccurence++;
          }
          else {
            $scope.lastChoice = null;
            $scope.lastChoiceOccurence = 1;
          }
        }

        var checkForEnd = function() {
          sendFromQuizQuestions
            .CheckForEndOfEvent()
            .then(function successCallback(response) {
                console.log(response);
              }, function errorCallback(response) {
                console.log('smthn failed miserably');
            });
        }

        setInterval(checkForEnd, 10000);
    });
