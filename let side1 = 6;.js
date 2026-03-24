let side1 = 6;
let side2 = 5;
let side3 = 4;

//check the types of triangle
if (side1 === side2 && side2 === side3){
    console.log("equilateral triangle");
}
else if (side1 === side2 || side2 === side3 || side3 === side1
){
    console.log("isosceles triangle");
}
else{
    console.log("scalene triangle");
}