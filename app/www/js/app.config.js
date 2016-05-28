(function () {
    'use strict';

    angular.module('starter')
        .config(function($stateProvider, $httpProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    controller: 'StartCtrl'
                })
                .state('map', {
                    url: '/map',
                    templateUrl: 'templates/map.html',
                    controller: 'MapCtrl'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl'
                })
                .state('teams', {
                    url: '/teams',
                    templateUrl: 'templates/teamlist.html',
                    controller: 'ListCtrl'
                })
                .state('quizQuestion', {
                  url: '/quiz-question',
                  templateUrl: 'templates/quiz-question.html'
                });

            $httpProvider.interceptors.push('httpErrorResponseRetry');
        });
}());
