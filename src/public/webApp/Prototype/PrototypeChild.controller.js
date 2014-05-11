(function( angular ){
    'use strict';

    var ngBookAppPrototypeModule = angular.module( 'ngBookApp.prototype' );

    var PrototypeChildController = function( $scope ){

        this.$scope = $scope;

        this.$scope.childAction = this._childAction.bind( this );
    };

    PrototypeChildController.prototype._childAction = function(){
        // sets {{ someBareValue }} inside ChildController
        this.$scope.someBareValue = 'hello human, from child';
        this.$scope.model.someValue = 'hello human, from child (model)';
    };


    PrototypeChildController.$inject = [ '$scope' ];

    ngBookAppPrototypeModule.controller( 'PrototypeChildController', PrototypeChildController );

}( angular ));
