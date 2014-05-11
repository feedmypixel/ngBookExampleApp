(function( angular ){
    'use strict';

    var ngBookAppScopeModule = angular.module( 'ngBookApp.scope' );

    var ScopeParentController = function( $scope ){

        this.$scope = $scope;

        this.$scope.parentProperty = 'parent scope';
    };

    ScopeParentController.$inject = [ '$scope' ];

    ngBookAppScopeModule.controller( 'ScopeParentController', ScopeParentController );

}( angular ));


