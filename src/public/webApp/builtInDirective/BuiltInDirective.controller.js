(function( angular ){
    'use strict';

    var ngBookAppBuiltInDirectiveModule = angular.module( 'ngBookApp.builtInDirective' );

    var BuiltInDirectiveController = function( $scope, $timeout ){

        this.$scope = $scope;
        this._$timeout = $timeout;

        this.$scope.builtInDirectiveModel = {
            textAreaIsDisabled: true,
            googleUrl: 'http://www.google.co.uk',
            googleText: 'go to google',
            googleImg: 'https://www.google.com/images/srpr/logo11w.png'
        };

        this._timer.call( this );
    };

    BuiltInDirectiveController.prototype._timer = function(){

        this._$timeout(function(){

            this.$scope.builtInDirectiveModel.textAreaIsDisabled = false;

        }.bind( this ), 5000);

    };

    BuiltInDirectiveController.$inject = [ '$scope', '$timeout' ];

    ngBookAppBuiltInDirectiveModule.controller( 'BuiltInDirectiveController', BuiltInDirectiveController );

}( angular ));