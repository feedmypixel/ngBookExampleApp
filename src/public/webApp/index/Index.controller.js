(function( angular ){
    'use strict';

    var ngBookApp = angular.module( 'ngBookApp.index' );

    var controller = {

        IndexController: [ '$scope', '$parse', '$interpolate', '$filter', function( $scope, $parse, $interpolate, $filter ){

            var time = 0;

            setInterval( function(){

                time = time || 1000;
                $scope.clock = {};

                $scope.$apply( function(){

                    $scope.clock.now = (new Date).toLocaleTimeString();
                });

            }, time );

            $scope.$watch( 'expr', function( newVal, oldVal, scope ){

                if( newVal !== oldVal ){

                    var parseFun = $parse( 'expr' );

                    $scope.parsedValue = parseFun( scope );

                }
            });

            /*
                Now, inside of our {{ previewText }} body, we can use {{ to }} as a variable in the text and
                allow it to be live-updated along with the rest of the text.
            */

            $scope.$watch( 'emailBody', function( body ){

                var template;

                if( body ){

                    template = $interpolate( body );

                    $scope.previewText = template( { to: $scope.to } );

                }
            });

            // use filter

            $scope.ben = $filter( 'lowercase' )( 'Ben' );
            $scope.capitalBen = 'BEN';

            $scope.largeDigitNumber = 12.343434232;
            $scope.twoDigitNumber = $filter( 'number' )( 123.43434232, 2 );

            $scope.isCapitalized = function( string ){

                return string[ 0 ] === string[ 0 ].toUpperCase();
            };
        }]
    };

    ngBookApp.controller( controller );

}( angular ));