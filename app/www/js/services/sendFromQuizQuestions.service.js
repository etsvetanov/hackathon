
angular.module('starter.controllers')
.factory('sendFromQuizQuestions', function($http) {
  var submitAnswerUrl = 'http://gotagapi.azurewebsites.net/api/incrementUserScore';
  var self = this,
      service = {};
  service.SubmitAnswer = submitAnswer;

  function submitAnswer(answer){
    return $http({
      method: 'POST',
      url: submitAnswerUrl
    });
  }

  return service;
});
