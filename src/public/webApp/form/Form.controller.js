(function( angular ){
    'use strict';

    var ngBookAppFormModule = angular.module( 'ngBookApp.form' );

    var FormController = function( $scope ){

        this.$scope = $scope;

        this.$scope.submitForm = this._submitForm.bind( this );
    };

    FormController.prototype._submitForm = function( isValid ){

        this.$scope.signup_form.submitted = true;

    };

    FormController.$inject = [ '$scope' ];

    ngBookAppFormModule.controller( 'FormController', FormController );

}( angular ));