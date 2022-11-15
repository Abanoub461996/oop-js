
// Encapsulation examples
// JS native
// function Person(fname,lname){
//   let firstname = fname;
//   let lastname = lname;

//   let getDetails_noaccess = function(){
//       return (`My name is: ${firstname} ${lastname}`);
//   }

//   this.getDetails_access = function(){
//     console.log('trying to access the private method within the class =>',getDetails_noaccess())
//       return (`Hi, I am ${firstname} ${lastname}`);
//   }
// }
// let person1 = new Person('Mukul','Latiyan');
// console.log('trying to access the private prop from the instance =>',person1.firstname); // private prop can't be accessed
// console.log('trying to access the private method from the instance =>',person1.getDetails_noaccess); 
// console.log('trying to access the public method from the instance =>',person1.getDetails_access());
    


// ES6 

// class Person{
//   constructor(x,speed){
//     let name = x;
//     this.speed = speed;
//     this.move = function () {
//       // can access both name and speed from here
//       console.log(`${name} moves with the speed of ${this.speed} miles per second!`);
//     }
//   }
//   jump() {
//     // cannot access speed from here
//     console.log(`${name} jumps on top of the building!`);
//     console.log(`${this.speed} is his speed`);
//   }
// }
// let person1 = new Person("Aba",500);
// console.log('trying to access the private prop from the instance =>',person1.name);
// console.log('trying to access the public prop from the instance =>',person1.speed);
// person1.move()
// person1.jump()


// Inheritance in ES6

// class Person {
//     name;
//     constructor(name){
//         this.name=name;
//     }

// }
// class Teacher extends Person{
//     payment;
//     constructor(name , payment){
//         super(name)
//         this.payment = payment;
//     }
// }
// let t1 = new Teacher("abanoub",5000);

// Methods and Props Overriding in Es6

class Person {
    name;
    constructor(name){
        this.name=name;
        this.occupation = "unemployed"
    }
    greet(){console.log("hello I am a "+this.occupation)}
    introduce(){console.log("hello I am a "+this.name)}

}
class Teacher extends Person{
    payment;occupation;
    constructor(name , payment){
        super(name)
        this.payment = payment;
        this.occupation = "Teacher"
    }
    greet(){console.log(this.occupation+" inheritance and ovverrriding")}
    static test(){console.log("I am a Static method", this);}
}
let t1 = new Teacher("abanoub",5000);
console.log();
Teacher.test()

// // Inheritance in JS
// function Person(name){
//     this.name = name;
//     this.occupation = "unemployeed"
//     this.greet=function (x){
//         console.log(x,"person constructor ");
//     }
// }
// function Student(name, grade){
//     this.grade = grade;
//     this.greet=function (x,y){
//         console.log(x,"student constructor greets "+y);
//     }
// }
// Student.prototype = new Person()
// let s2 = new Student("bodda", "5th")
// let s3 = new Student("bodda", "5th")
// let s4 = new Student("bodda", "5th")

// s3.greet("abanoub")

