// IIFE stands for Immediately Invoked Function Expression

(function () {
  // This code is wrapped within the IIFE
  var x = 10;
  console.log(x); // Outputs: 10
})();

(function(a, b) {
    var result = a + b;
    console.log(result); // Outputs the result of the addition
  })(5, 7); // Invoking the IIFE with arguments
  