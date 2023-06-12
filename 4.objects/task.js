function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  let student1 = new Student("Bill", "male", 20);
  let student2 = new Student("Anya", "female", 20);
  let student3 = new Student("Yma", "female", 22);
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  };
  
  Student.prototype.addMarks = function (...marksToAdd) {
    if (this.excluded) {
      return;
    }
    this.marks.push(...marksToAdd);
  };
  
  Student.prototype.getAverage = function () {
    let result =
      this.marks && this.marks.length
        ? this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length
        : 0;
    return result;
  };
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  };
  