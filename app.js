//? Classes in ES6
// class Person {
//   name;
//   height;
//   weight;
//   nationality = "Egyptian";
//   constructor(name, h, w) {
//     this.name = name;
//     this.height = h;
//     this.weight = w;
//   }
//   greet() {
//     console.log(`Hello this is ${this.name} I am ${this.nationality}`);
//   }
//   jump() {
//     console.log("I can Jumpt");
//   }
// }

//? Static Props and Methods

// class Person {
//   name;
//   height;
//   weight;
//   nationality = "Egyptian";
//   static count = 0;
//   constructor(name, h, w) {
//     this.name = name;
//     this.height = h;
//     this.weight = w;
//     Person.count++;
//   }
//   greet() {
//     console.log(`Hello this is ${this.name} I am ${this.nationality}`);
//   }
//   jump() {
//     console.log("I can Jumpt");
//   }

//   static definePerson() {
//     console.log("a person has a name, height and weight");
//   }
//   static setCount(v) {
//     Person.count = v;
//   }
// }

//? Getter & Setter Methods

// class Person {
//   #name;
//   height;
//   weight;
//   nationality = "Egyptian";
//   static count = 0;
//   constructor(name, h, w) {
//     this.#name = name;
//     this.height = h;
//     this.weight = w;
//     Person.count++;
//   }
//   greet() {
//     console.log(`Hello this is ${this.#name} I am ${this.nationality}`);
//   }
//   jump() {
//     console.log("I can Jumpt");
//   }

//   static definePerson() {
//     console.log("a person has a name, height and weight");
//   }
//   static setCount(v) {
//     Person.count = v;
//   }

//   getName() {
//     return this.#name;
//   }
//   get name() {
//     return this.#name;
//   }

//   set setname(v){
//     this.#name = v;
//   }
// }
// const per = new Person("ahmed",175,70)



//? Object Oriented Programming Concepts

//? Encapsulation in  ES6

// class User{
//     #name

//     constructor(name, password){
//         this.#name = name
//         this._password = password
//     }
    
//     #printName(){
//         console.log(this.#name);
//     }

//     PrintFromPrivateMethod(){
//         this.#printName()
//     }
// }

// const kedar = new User("kedar", 123456)
// kedar.#name

//? Inheritance 
//* ES6

// class Person {
//     name;
//     id;
//     constructor(name , id){
//         this.name=name;
//         this.id=id;
//     }
// }
// class Teacher extends Person{
//     payment;
//     constructor(name,id,payment){
//         super(name,id)
//         this.payment = payment;
//     }
// }
// let t1 = new Teacher("abanoub","dsadasdasdsa",5000);

//! JS

// function Person(name,id){
//     this.name = name;
//     this.id=id;
// }
// function Teacher(name,id, payment){
//     this.payment = payment;
    
// }
// Teacher.prototype = new Person()

// let t1 = new Teacher(5000);
// t1.__proto__.name = "abanoub";
// t1.__proto__.id = "dsadasdasdsa";


// console.log(t1);


//? Methods and Props Overriding in ES6

// class Person {
//     name;
//     constructor(name){
//         this.name=name;
//         this.occupation = "unemployed"
//     }
//     greet(){console.log("hello I am a "+this.occupation)}
//     introduce(){console.log("hello I am "+this.name)}

// }
// class Teacher extends Person{
//     payment;occupation;
//     constructor(name , payment){
//         super(name)
//         this.payment = payment;
//         this.occupation = "Teacher"
//     }
//     greet(){console.log(this.occupation+" inheritance and ovverrriding")}
//     static test(){console.log("I am a Static method", this);}
// }
// let t1 = new Teacher("Ahmed",5000);
// console.log(t1);
