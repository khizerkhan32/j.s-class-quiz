
//  -------------------------------q8----------------------

var arr = [ 2, 45, 3, 67, 34, 567, 34, 345,123];
var largest = arr[0];

for (var i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i]; 
  }
}
console.log(`The largest number is ${largest}`);