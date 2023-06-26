function parseCount(number) {
  try {
    let parsedNumber = Number.parseFloat(number);
    if (isNaN(Number.parseFloat(number))) {
      throw new Error("Невалидное значение");
    }
    return parsedNumber;
  } catch (error) {
    return console.log(error);
  }
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
    try {
      if (a < b + c && b < a + c && c < a + b) {
        this.a = a;
        this.b = b;
        this.c = c;
      } else {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  get perimeter() {
    try {
      if (
        !(
          this.a < this.b + this.c &&
          this.b < this.a + this.c &&
          this.c < this.a + this.b
        )
      ) {
        throw new Error("Ошибка! Треугольник не существует");
      }
      return this.a + this.b + this.c;
    } catch (error) {
      console.log(error.message);
    }
  }

  get area() {
    try {
      if (
        !(
          this.a < this.b + this.c &&
          this.b < this.a + this.c &&
          this.c < this.a + this.b
        )
      ) {
        throw new Error("Ошибка! Треугольник не существует");
      }
      const s = this.perimeter / 2;
      return ((s * (s - this.a) * (s - this.b) * (s - this.c)) ** 0.5).toFixed(
        3
      );
    } catch (error) {
      console.log(error.message);
    }
  }
}

function getTriangle(a, b, c) {
  const newTriangle = new Triangle(a, b, c);
  try {
    if (!(a < b + c && b < a + c && c < a + b)) {
      throw Error("Треугольник с такими сторонами не существует");
      return;
    }
    return newTriangle;
  } catch (error) {
    return newTriangle, newTriangle.area, newTriangle.perimeter;
  }
}

