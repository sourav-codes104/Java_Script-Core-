/* ===========================
JS PRACTICE SHEET 1 (Basics)
===========================

// Q1 How do you create variables to store your name, age and student status?
// Q2 How do you add, subtract, multiply and divide two numbers?
// Q3 How do you swap two numbers using a third variable?
// Q4 How do you swap two numbers without using a third variable?
// Q5 How do you check datatype of different variables?
// Q6 How do you check if a number is even or odd?
// Q7 How do you convert string to number and number to string?
// Q8 How do you find remainder of a division?
// Q9 What is the output of 5 + "5" and why?
// Q10 Difference between == and === with example?

*/

// Q1 How do you create variables to store your name, age and student status?

// let name = "Sourav Singh";
// let age = 23;
// let is_student = true;

// Q2 How do you add, subtract, multiply and divide two numbers?

// let a = 23 , b = 43;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// Q3 How do you swap two numbers using a third variable?

// let a = 5
// let b = 6
// let temp = a
// a = b
// b = temp
// console.log(a)
// console.log(b)

// Q4 How do you swap two numbers without using a third variable?
// let a = 7;
// let b = 8;
// a = a-b;
// b = a+b;
// a = b-a;
// console.log(a);
// console.log(b);

// Q5 How do you check datatype of different variables?
// ans: we us typeof() function to identify the datatype of a varibale

// let a = 6.78;
// let b = "Hy";
// let c = true;
// let d = [1,2,3,4,5];
// let e = {
//   name:"sourav",
//   class : 10,
//   age: 18
// }
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

//NOTE:dont use type of for array and objects

// // Q6 How do you check if a number is even or odd?
// let num = 6;
// if(num%2===0){
//   console.log("Number is even");
// }
// else{
//   console.log("Number is odd");
// }

// Q7 How do you convert string to number and number to string?

// let a = 6;
// a=a.toString();
// console.log(typeof(a));

// let b = "7";
// b=Number(b);
// console.log(typeof(b));

// Q8 How do you find remainder of a division?
// let a = 6 , b = 8;
// let rem = a%b;
// console.log(rem);

// Q9 What is the output of 5 + "5" and why?
// console.log("5"+5);
// ans : When a number is added to a string, JavaScript converts the number to a string
// Then performs concatenation, not addition.

// Q10 Difference between == and === with example?
// ans : Difference:
// == (loose equality)
// → compares values after type conversion
// === (strict equality)
// → compares value + datatype (no conversion)