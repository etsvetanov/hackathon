angular.module('starter.controllers')

    .controller('AwaitEventCtrl', function ($scope, $state) {

        $scope.eventMessage = "Event starts soon!";
        $.connection.hub.logging = true;
        $.connection.hub.url = "http://gotagapi.azurewebsites.net/signalr";

        var goTagSignalRHub = $.connection.goTagSignalRHub;

        goTagSignalRHub.client.eventStartCountDown = function () {
            $scope.countdownStarted = true;
            console.log("The countdown has begun!");
        };

        goTagSignalRHub.client.eventStartCountDownUpdate = function (secondsLeft) {
            $scope.eventMessage = "Event starts in:";
            $scope.secondsLeft = secondsLeft;
            fadeOutFadeIn();
            $scope.$evalAsync();
            console.log("seconds left: " + secondsLeft);
        };

        goTagSignalRHub.client.startEvent = function (durationInSeconds) {
            $state.go("quizQuestion");
            console.log("Event has started");
        };

        $.connection.hub.start({ transport: ['webSockets', 'longPolling'] })
            .done(function(){ console.log('Now connected, connection ID=' + $.connection.hub.id); })
            .fail(function(){ console.log('Could not Connect!'); });

            function fadeOutFadeIn(){
                $("#secondsLeft").fadeOut(0, function(){
                    $("#secondsLeft").fadeIn(700);
                });
            }
    });