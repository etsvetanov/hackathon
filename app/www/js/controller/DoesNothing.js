angular.module('starter.controllers')

.controller('DoesNothing', function($scope, $q, $timeout, sendNothing) {

  var promise = $timeout(function () {
  	return 'result';
  }, 5000);

  promise.then(function (data) {
  	console.log(data);
  });

  sendNothing.getData();
  console.log('dadda');
});
