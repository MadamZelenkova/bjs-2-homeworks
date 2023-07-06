function parseCount(number) {
  let parsedNumber = Number.parseFloat(number);
  if (isNaN(Number.parseFloat(number))) {
    throw new Error('Невалидное значение');
  }
  return parsedNumber;
}


function validateCount(number) {
try {
  return parseCount(number);
} catch (error) {
  return error;
}
}
//________________________________________________________________________________________

class Triangle {
constructor(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
      this.a = a;
      this.b = b;
      this.c = c;
    } else {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  } 
  get perimeter() {
    return this.a + this.b + this.c;
}

    get area() {
    const s = this.perimeter / 2;
    return + ((s * (s - this.a) * (s - this.b) * (s - this.c)) ** 0.5).toFixed(3);
}
}


function getTriangle(a, b, c) {
try {
  const newTriangle = new Triangle(a, b, c);
  return newTriangle;
} catch (error) {
  return {
    get perimeter() {
      return 'Ошибка! Треугольник не существует';
  },
  get area() {
    return 'Ошибка! Треугольник не существует';
}
  }
}
}