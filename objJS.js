var Student = function(name, age) {
  this.name = name; 
  this.age = age;
  this.birthday = function(){
   this.age++;
  }
}

var student1 = new Student("Mary", 11);
student1.birthday();


console.log("Student 1 Age:", student1.age);
