(function( angular ){
    'use strict';

    var ngBookApp = angular.module( 'ngBookApp.app' );

    ngBookApp.directive( 'ensureUnique', [ 'IsUniqueService', function( IsUniqueService ){

        return {

            restrict: 'A',

            require: 'ngModel',

            link: function( scope, element, attributes, ngModelCtl ){

                scope.$watch( attributes.ngModel, function( newVal, oldVal ){

                    if( newVal !== oldVal ){

                        IsUniqueService.userName( { userName: newVal } ).$promise.then( function( data ){

                            ngModelCtl.$setValidity( 'unique', data.isUnique );

                        }, function( data ){

                            ngModelCtl.$setValidity( 'unique', false );
                        } );
                    }
                } );
            }
        };

    } ] );
}( angular ));