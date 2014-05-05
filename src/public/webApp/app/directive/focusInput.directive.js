(function( angular ){
    'use strict';

    var ngBookAppModule = angular.module( 'ngBookApp.app' );

    ngBookAppModule.directive( 'focusInput', [ function(){

        var FOCUS_CLASS = "ng-focused";

        return {

            restrict: 'A',

            require: 'ngModel',

            link: function( scope, element, attributes, ngModelController ){

                ngModelController.$focused = false;

                element.bind( 'focus', function(){

                    element.addClass( FOCUS_CLASS );

                    scope.$apply( function(){

                        ngModelController.$focused = true;
                    } );

                } ).bind( 'blur', function(){

                    element.removeClass( FOCUS_CLASS );

                    scope.$apply( function(){

                        ngModelController.$focused = false;
                    } );
                } );
            }
        };

    } ] );

}( angular ) );
