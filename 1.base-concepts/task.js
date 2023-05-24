"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);

    return (arr = [x1, x2]);
  } else if (d === 0) {
    let x = -b / (2 * a);

    return (arr = [x]);
  } else {
    return (arr = []);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  countMonths = +countMonths;

  if (
    Number.isNaN(percent) ||
    Number.isNaN(contribution) ||
    Number.isNaN(amount) ||
    Number.isNaN(countMonths)
  ) {
    return false;
  }

  let P = percent / 100 / 12;
  let S = amount - contribution;
  let n = countMonths;
  let payment = S * (P + P / ((1 + P) ** n - 1));
  let totalAmount = payment * countMonths;
  totalAmount = +totalAmount.toFixed(2);

  return totalAmount;
}
