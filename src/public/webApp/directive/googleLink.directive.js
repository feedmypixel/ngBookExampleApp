(function( angular ){
    'use strict';

    var directiveModule = angular.module( 'ngBookApp.directive' );

    directiveModule.directive('myDirective', function(){
        return {

            restrict: 'EACM', //element (E), an attribute (A), a class (C), or a comment (M)

            //replace: true, //replace directive element with contents

            scope: {

                myUrl: '=',      //two way binding
                myLinkText: '@'  //read property of attribute/expression on directive element
            },

            template: '<input type="text" ng-model="myUrl"/><a href="{{myUrl}}" target="_blank">{{myLinkText}} | {{greeting}} World</a>'
        };
    });
}( angular ) );
