var numbers = [1, 2, 3, 4, 5, 6];
var even = numbers.filter(function(x) {
  return x % 2 == 0;
});

console.log(even); //[ 2, 4, 6 ]