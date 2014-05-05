(function( angular ){
    'use strict';

    var ngBookApp = angular.module( 'ngBookApp.app' );
    
    ngBookApp.factory( 'IsUniqueService', [ '$resource', function( $resource ){

        var USER_NAME_URL = '/api/is_unique/username';

        return $resource( null, {}, {

            userName: { url: USER_NAME_URL, method: 'POST', isArray: false }
        });

    }]);
}( angular ) );
