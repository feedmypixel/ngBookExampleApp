(function( angular ){
    'use strict';

    var ngBookApp = angular.module( 'ngBookApp.app' );

    ngBookApp.directive( 'ensureUnique', [ 'IsUniqueService', function( IsUniqueService ){

        return {

            restrict: 'A',

            require: 'ngModel',

            link: function( scope, element, attributes, ngModelController ){

                scope.$watch( attributes.ngModel, function( newVal, oldVal ){

                    if( newVal && newVal !== oldVal ){

                        IsUniqueService.userName( { userName: newVal } ).$promise.then( function( data ){

                            ngModelController.$setValidity( 'unique', data.isUnique );

                        }, function(){

                            ngModelController.$setValidity( 'unique', false );
                        } );
                    }
                } );
            }
        };

    } ] );

}( angular ));