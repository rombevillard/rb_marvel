'use strict';
// create global app object
var app = window.app || {};
// store Marvel API public key
app.$apikey_pub = '03d1d00e90975a8f90f71f9c13cf4bc3';
app.$apikey_pub_alt = '16561d8e1428bd5f1c4cc06e98262c50';
// store Marvel API private key
app.$apikey_pri = '3d0e2d5bb3f41c7480d148dd61f2b1a7093d439b';
app.$apikey_pri_alt = '3301ec604d2aabf45b7d603e19100901b1374724';

// Declare app level module which depends on views, and components
angular.module('rbMarvel', [
	'ngRoute',
	'ngMaterial',
	'ngAnimate',
	//'ngMock',
	'rbMarvel.home',
	'rbMarvel.creators',
	'rbMarvel.comics',
	'rbMarvel.version'
	])

// if no route or route not existing provided,
// lets get back home
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}])

// theme config
.config(['$mdThemingProvider', '$mdIconProvider', function($mdThemingProvider, $mdIconProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('red')
		.accentPalette('blue-grey');
	$mdIconProvider
		.icon("menu" , "assets/menu.svg" , 24);
}])

.controller('NavCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
	$scope.toggleLeft = function() {
		$mdSidenav('left').toggle();
	}
}]);
