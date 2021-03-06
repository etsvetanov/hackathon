(function () {
    'use strict';

    angular.module('starter')
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    controller: 'StartCtrl'
                })
                .state('map', {
                    url: '/map',
                    templateUrl: 'templates/map.html',
                    controller: 'MapCtrl',
                    resolve: {
                        infoWindowContent: function ($http) {
                            return $http.get('/templates/infoWindow.html')
                                        .then(function (res) {
                                            return res.data;
                                        });
                        }
                    }
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
                    templateUrl: 'templates/quiz-question.html',
                    controller: 'QuizQuestionCtrl'
                })
                .state('awaitEvent', {
                    url: '/await-event',
                    templateUrl: 'templates/await-event.html',
                    controller: 'AwaitEventCtrl'
                })
                .state('resultPage', {
                    url: '/resultPage',
                    templateUrl: 'templates/map.html',
                    controller: 'ResultCtrl',
                    resolve: {
                        infoWindowContent: function ($http) {
                            return $http.get('/templates/infoWindow.html')
                                        .then(function (res) {
                                            return res.data;
                                        });
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');

            $httpProvider.interceptors.push('httpErrorResponseRetry');
        });
}());
