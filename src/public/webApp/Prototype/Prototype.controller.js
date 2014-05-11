(function( angular ){
    'use strict';

    var ngBookAppPrototypeModule = angular.module( 'ngBookApp.prototype' );

    var PrototypeController = function( $scope ){

        this.$scope = $scope;
    };

    PrototypeController.$inject = [ '$scope' ];

    ngBookAppPrototypeModule.controller( 'PrototypeController', PrototypeController );

}( angular ));