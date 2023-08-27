
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
