
angular.module('starter.controllers')
.factory('sendFromQuizQuestions', function($http) {
  var submitAnswerUrl = 'http://gotagapi.azurewebsites.net/api/incrementUserScore';
  var checkForEndOfEventUrl = 'http://gotagapi.azurewebsites.net/api/isEventFinished';
  var self = this,
      service = {};
  service.SubmitAnswer = submitAnswer;
  service.CheckForEndOfEvent = checkForEndOfEvent;

  function submitAnswer(answer){
    return $http({
      method: 'POST',
      url: submitAnswerUrl
    });
  }

  function checkForEndOfEvent(){
    return $http({
      method: 'POST',
      url: checkForEndOfEventUrl
    });
  }
  
  return service;
});
