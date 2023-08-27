const x = 2;


if(x % 2 == 0){
    console.log('The number is Even');
}
else {
    console.log('The number is odd');
}






 
//  ------------------------------q7------------------------------

const zz = 50;
 if(zz >= 90 && zz <=100)[
    console.log('Student obtain S Grade')
 ]
 if(zz >= 80 && zz <=89)[
    console.log('Student obtain A Grade')
 ]

 else if(zz >= 70 && zz <=79)[
    console.log('Student obtain B Grade')
 ]
 else if(zz >= 60 && zz <=69)[
    console.log('Student obtain C Grade')
 ]
 else if(zz >= 50 && zz <=59)[
    console.log('Student obtain D Grade')
 ]
 else if(zz >= 40 && zz <=49)[
    console.log('Student obtain E Grade')
 ]
 else if(zz <= 39)[
    console.log('Student is fail')
 ]
 else{
    console.log('Invalid Markes')
 }

//  -------------------------------q8----------------------

var arr = [ 2, 45, 3, 67, 34, 567, 34, 345,123];
var largest = arr[0];

for (var i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i]; 
  }
}
console.log(`The largest number is ${largest}`);

// ----------------------------------q9-----------------------------------
var dot = 5; 

for (var i = 1; i <= dot; i++) {
  var pat = "";
  for (var j = 1; j <= i; j++) {
    pat += "* ";
  }
  console.log(pat);
}


// -----------------------------q10-------------------------

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

let sum_1 = 0;
for (let i = 0; i < arr_1.length; i++) {
  sum_1 += arr_1[i];
}

let sum_2 = 0;
for (let i = 0; i < arr_2.length; i++) {
  sum_2 += arr_2[i];
}

let totalSum = sum_1 + sum_2;

console.log(`Total sum: ${totalSum}`);

// --------------------------------q11----------------------

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
  
// ------------------------------q12-----------------------
let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}


