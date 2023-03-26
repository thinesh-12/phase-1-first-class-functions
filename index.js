function receivesAFunction(callback){
    return callback("This is a callback function");
}
callback();


function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }

function returnsANamedFunction() {
       function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }
  

