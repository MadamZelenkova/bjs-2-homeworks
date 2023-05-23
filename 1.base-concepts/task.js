"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const d = b**2 - 4*a*c;
  if(d > 0) {
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);

    return arr = [x1, x2]
  } else if(d === 0) {
   let x = -b/(2*a);

   return arr = [x];
  } else {
    return arr = [];
  }
  
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}