(function( angular ){
    'use strict';

    var ngBookAppPrototypeModule = angular.module( 'ngBookApp.prototype' );

    var PrototypeParentController = function( $scope ){

        this.$scope = $scope;

        this.$scope.someBareValue = 'hello computer';

        // best practice, always use a model
        this.$scope.model = {
            someValue: 'hello computer (model)'
        };

        this.$scope.someAction = this._someAction.bind( this );
    };

    PrototypeParentController.prototype._someAction = function() {
        // sets {{ someBareValue }} inside SomeController and ChildController
        this.$scope.someBareValue = 'hello human, from parent';
        this.$scope.model.someValue = 'hello human, from parent (model)';
    };

    PrototypeParentController.$inject = [ '$scope' ];

    ngBookAppPrototypeModule.controller( 'PrototypeParentController', PrototypeParentController );

}( angular ));


