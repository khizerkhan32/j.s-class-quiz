// -------------------------------q5----------------------------
const side1 = 30;
const side2 = 50;
const side3 = 30;

if(side1 == side2 && side2 == side3){
    console.log('Equilateral Triangle')
}
else if (side1 == side2 || side2 == side3){
    console.log('Isoceles Triangle')
}
else{
    console.log('scalene Triangle because all sides are unequal')
}
 