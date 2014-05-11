(function( angular ){
    'use strict';

    var ngBookApp = angular.module( 'ngBookApp', [
        'ngRoute',
        'ngResource',
        'ngBookApp.index',
        'ngBookApp.form',
        'ngBookApp.directive',
        'ngBookApp.scope',
        'ngBookApp.app',
        'ngBookApp.builtInDirective',
        'ngBookApp.prototype'
    ] );

    ngBookApp.run( [ '$rootScope', function( $rootScope ){

        // access $rootScope for app in run method on app
        // this is global scope best not to use!

        $rootScope.rootProperty = 'root scope';
        $rootScope.someProperty = 'hello computer';
        $rootScope.someAction = function() {

            $rootScope.someProperty = 'hello human';
        };

    } ] );

    ngBookApp.config( [ '$httpProvider', '$routeProvider', '$locationProvider', function( $httpProvider, $routeProvider, $locationProvider ){

        $routeProvider.when( '/', {

            templateUrl: '/views/partials/home.html',
            controller: 'IndexController'

        } ).when( '/form', {

            templateUrl: '/views/partials/form.html',
            controller: 'FormController'

        } ).when( '/directive', {

            templateUrl: '/views/partials/directive.html',
            controller: 'DirectiveController'

        } ).when( '/scope', {

            templateUrl: '/views/partials/scope.html',
            controller: 'ScopeController'

        } ).when( '/built-in-directive', {

            templateUrl: '/views/partials/builtInDirective.html',
            controller: 'BuiltInDirectiveController'

        } ).when( '/prototype', {

            templateUrl: '/views/partials/prototype.html',
            controller: 'PrototypeController'

        } ).otherwise( { redirectTo: '/' } );

        $locationProvider.html5Mode( true ).hashPrefix( '!' );
    } ] );

}( angular ));