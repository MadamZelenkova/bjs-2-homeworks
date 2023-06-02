function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (max < number) {
      max = number;
    }

    if (min > number) {
      min = number;
    }
    sum += arr[i];
  }

  let avg = sum / arr.length;

  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return +sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = max - min;
  return +difference;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return +(sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return +(sumEvenElement / countEvenElement).toFixed(2);
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return +maxWorkerResult;
}
