(function( angular ){
    'use strict';

    var ngBookAppScopeModule = angular.module( 'ngBookApp.scope' );

    var ScopeController = function( $scope ){

        this.$scope = $scope;
    };

    ScopeController.$inject = [ '$scope' ];

    ngBookAppScopeModule.controller( 'ScopeController', ScopeController );

}( angular ));