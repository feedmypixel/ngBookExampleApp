(function( angular ){
    'use strict';

    var ngBookApp = angular.module( 'ngBookApp.app' );

    ngBookApp.filter( 'capitalizeFirstCharacter', function(){

        return function( string ){

            if( string ){

                return string[ 0 ].toUpperCase() + string.slice( 1 );
            }
        };
    });


}( angular ));