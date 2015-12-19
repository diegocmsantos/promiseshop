var q = require('q');
var defer = q.defer();

var attachTitle = function( title ) {
  return "DR. " + title;
}

defer.promise
  .then( attachTitle )
  .then( console.log );
defer.resolve( 'MANHATTAN' );