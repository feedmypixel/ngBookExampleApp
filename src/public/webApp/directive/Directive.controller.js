(function( angular ){
    'use strict';

    var ngBookAppDirectiveModule = angular.module( 'ngBookApp.directive' );

    var DirectiveController = function( $scope ){

        this.$scope = $scope;
    };

    DirectiveController.$inject = [ '$scope' ];

    ngBookAppDirectiveModule.controller( 'DirectiveController', DirectiveController );

}( angular ));