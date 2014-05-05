'use strict';

var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var morgan = require( 'morgan' );
var app = express();
var path = require( 'path' );
var pathToAngularIndex = path.resolve( __dirname + '/../public/index.html' );
var port = process.env.PORT || 8092;

app.use( express.static( __dirname + '/../public' ) );
app.use( morgan( 'dev' ) );
app.use( bodyParser() );
app.use( methodOverride() );

app.route( '/api/is_unique/username').post( function( req, res, next ){

    //TODO username functionality
    var isUnique = 'ben' === req.body.userName && true;

    res.json( 200, { isUnique: isUnique } );
});

app.route( '*' ).get( function( req, res, next ){

    res.sendfile( pathToAngularIndex );
});

app.listen( port, function(){

  console.log( 'listening on port: ' + port );
});
