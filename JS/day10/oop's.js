// OOP's concept

// class Student{
//     constructor(name,age){
//         this.name = name;  // this.name = name la this ku pakkathula iruka name primary attr 
//         this.age  = age;
//     }
// }
// shorthand method for class
function Student(name,age) {
    this.name =name;
    this.age  = age;
}
const obj1 =new Student("Nanthiga",19);
console.log(obj1.name);
const obj2 =new Student("Nanthu",19);
console.log(obj2.name);
const obj3 =new Student("Nan",19);
console.log(obj3.name);
class Child extends Student{

}