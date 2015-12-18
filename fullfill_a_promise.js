var q = require('q');
var defer = q.defer(); 
//defer.promise is the actual promise itself
defer.promise.then( console.log );
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here
setTimeout( defer.resolve, 300, 'RESOLVED!' );