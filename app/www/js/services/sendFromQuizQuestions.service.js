
angular.module('starter.controllers')
.factory('sendFromQuizQuestions', function($http) {
  var submitAnswerUrl = 'http://gotagapi.azurewebsites.net/api/incrementUserScore';
  var checkForEndOfEventUrl = 'http://gotagapi.azurewebsites.net/api/isEventFinished';
  var getEventResultUrl = 'http://gotagapi.azurewebsites.net/api/getEventResult';
  var self = this,
      service = {};
  service.SubmitAnswer = submitAnswer;
  service.CheckForEndOfEvent = checkForEndOfEvent;
  service.getEventResult = getEventResult;

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

  function getEventResult(){
     return $http({
      method: 'POST',
      url: getEventResultUrl
    });
  }
  
  return service;
});
