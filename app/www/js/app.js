angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'ionic-material'])

.run(function($ionicPlatform, $rootScope) {
	$ionicPlatform.ready(function() {
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});


if(!window.location.hash) {
	window.location.hash = '#/';
}
