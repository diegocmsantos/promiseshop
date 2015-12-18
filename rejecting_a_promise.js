var q = require('q');
var defer = q.defer();

var errorFn = function( error ) {
  console.log( error.message );
}

defer.promise.then( null, errorFn );

//defer.promise.then is the "Q" way of attaching a then handler
//your solution here
setTimeout( defer.reject, 300, new Error( 'REJECTED!' ) );