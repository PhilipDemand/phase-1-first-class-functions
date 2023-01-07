function receivesAFunction(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }

  function returnsANamedFunction() {
    return function namedFunction() {
    };
  }

  function returnsAnAnonymousFunction() {
    return (function () {
     console.log('this is being logged')
  });
  }