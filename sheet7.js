/* ===========================
JS PRACTICE SHEET 7 (Scope & Closures)
===========================

// Q61 Difference between var let const with example?
// Q62 How do you demonstrate function scope?
// Q63 How do you demonstrate block scope?
// Q64 What is lexical scope example?
// Q65 What is closure example?
// Q66 How do you create counter using closure?
// Q67 How do you create private variable using closure?
// Q68 How do you create function factory?
// Q69 How do you write IIFE?
// Q70 What is output of IIFE example?

*/
// Q61 Difference between var let const with example?
// var : it can only be scoped in functions only otherwise in blocks u can access it outside also
//Example:
// if(1){
//   var count = 0;
//   count++;
// }

// console.log(count);// it works

// let fun = ()=>{
//   var num = 6;
// }

// console.log(num);// it not works because variable is only functional scoped
// var can be hoisted but it gives undefined error as there is no temporal dead zone

//let : it is function and blocked scope so we can not access it outside the blocks
// let num = 7;
// let num = 6; // redeclaration not define but reintialization can be done
// num = 6 ; works
// can be hoisted but lies in tdz so it gives refernce error

// const : it is function and blocked scope so we can not access it outside the blocks
// let num = 7;
// let num = 6; // redeclaration not define but reintialization can also be not done
// num = 6 ; not works
// can be hoisted but lies in tdz so it gives refernce error

// // Q62 How do you demonstrate function scope?
// let greet = ()=>{
//   let x = 5;
//   x++;
//   console.log(x);
// }
// greet();
// console.log(x);// not works

// // Q63 How do you demonstrate block scope?
// if(1){
//   let x = 5;
//   var y = 6;
//   console.log(x*2);
//   console.log(y*2);
// }
// // console.log(x); not works for let
// console.log(y);

// Q64 What is lexical scope example?
// function inner(){
//   console.log(a);
// }
// function outer(){
//   let a = 7;
//   a++;
//   inner();
// }
// let a = 6;
// outer();

// function outer(){
//   let a = 7;
//   a++;
//   function inner(){
//   console.log(a);
// }
// inner();
// }
// let a = 6;
// outer();

// // Q65 What is closure example?
// let outer = () => {
//   let a = 9;
//   let inner = () => {
//     a++;

//     console.log(a);
//   };
//   return inner;
// };

// let ans = outer();
// ans();
// ans();

// Q66 How do you create counter using closure?

// function outer(){
//   let count = 0;
//   function inner(){
//     count++;
//     console.log(count);
//   }
//   return inner;
// }

// let counter = outer();
// counter();
// counter();

// Q67 How do you create private variable using closure?

// function outer() {
//   let count = 0; // private variable

//   return {
//     increment_method: function () {
//       count++;
//     },
//     decrement_method: function () {
//       count--;
//     },
//     getter: function () {
//       return count;
//     },
//     setter: function (value) {
//       count = value;
//     },
//   };
// }

// let counter = outer();

// counter.increment_method();
// console.log(counter.getter());
// counter.increment_method();
// console.log(counter.getter());
// counter.increment_method();
// console.log(counter.getter());
// counter.increment_method();
// console.log(counter.getter());
// counter.increment_method();
// console.log(counter.getter());
// counter.increment_method();
// console.log(counter.getter());
// counter.decrement_method();
// console.log(counter.getter());

// counter.increment_method();
// console.log(counter.getter());
// counter.decrement_method();
// console.log(counter.getter());

// counter.setter(20);

// counter.increment_method();
// console.log(counter.getter());
// counter.increment_method();
// console.log(counter.getter());
// counter.increment_method();
// console.log(counter.getter());
// counter.increment_method();
// console.log(counter.getter());
// counter.increment_method();
// console.log(counter.getter());
// counter.increment_method();
// console.log(counter.getter());
// counter.decrement_method();
// console.log(counter.getter());

// counter.increment_method();
// console.log(counter.getter());
// counter.decrement_method();
// console.log(counter.getter());

// Q68 How do you create function factory?

// function general_store(discount) {
//   return function(price){
//     return price - (price*discount/100);
//   }
// }

// let person1 = general_store(20);
// let person2 = general_store(25);

// console.log(person1(1000));
// console.log(person2(1000));

// Q69 How do you write IIFE?

// (function(){
//   console.log("Hy response from IIFE")
// })();

// Q70 What is output of IIFE example?
// (function(value){
//   console.log(value*value);
// })(5);
// output is 25
