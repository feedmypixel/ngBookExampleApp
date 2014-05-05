(function( angular ){
    'use strict';

    var ngBookApp = angular.module( 'ngBookApp', [
        'ngRoute',
        'ngResource',
        'ngBookApp.index',
        'ngBookApp.form',
        'ngBookApp.app'
    ] );

    ngBookApp.config( [ '$httpProvider', '$routeProvider', '$locationProvider', function( $httpProvider, $routeProvider, $locationProvider ){

        $routeProvider.when( '/', {

            templateUrl: '/views/partials/home.html',
            controller: 'IndexController'

        } ).when( '/form', {

            templateUrl: '/views/partials/form.html',
            controller: 'FormController'

        } ).otherwise( { redirectTo: '/' } );

        $locationProvider.html5Mode( true ).hashPrefix( '!' );
    } ] );

}( angular ));