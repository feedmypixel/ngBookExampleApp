(function( angular ){
    'use strict';

    var ngBookAppScopeModule = angular.module( 'ngBookApp.scope' );

    var ScopeChildController = function( $scope ){

        this.$scope = $scope;

        this.$scope.childProperty = 'child scope';

        // just like in the DOM, we can access any of the properties in the prototype chain directly from the current $scope
        this.$scope.fullSentenceFromChild = [
            'Same $scope: We can access: ',
            this.$scope.rootProperty, ' and ',
            this.$scope.parentProperty,' and ',
            this.$scope.childProperty
        ].join('');
    };

    ScopeChildController.$inject = [ '$scope' ];

    ngBookAppScopeModule.controller( 'ScopeChildController', ScopeChildController );

}( angular ));
