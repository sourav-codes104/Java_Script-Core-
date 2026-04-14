
/* ===========================
JS PRACTICE SHEET 2 (Conditions)
===========================

// Q11 How do you check if a number is positive or negative?
// Q12 How do you find largest among two numbers?
// Q13 How do you find largest among three numbers?
// Q14 How do you check voting eligibility?
// Q15 How do you check leap year?
// Q16 How do you create grading system using if else?
// Q17 How do you create calculator using switch case?
// Q18 How do you check vowel or consonant?
// Q19 How do you check number divisible by 3 and 5?
// Q20 How do you implement FizzBuzz?

*/

// Q11 How do you check if a number is positive or negative?
// let a = 0;
// if(a>0){
//   console.log("Number is positive");
// }
// else if(a<0){
//   console.log("Number is negative");
// }
// else{
//   console.log("Zero");
// }

//  Q12 How do you find largest among two numbers?
// let num1 = 9 , num2 = 7;
// if(num1>num2){
//   console.log("Num1 is greater than Num2");
// }
// else if(num1<num2){
//   console.log("Num2 is greater than Num1");
// }
// else{
//   console.log("Both are equal");
// }

// Q13 How do you find largest among three numbers?
// let a = 44, b = 44, c = 15;
// if(a>=b && a>=c){
//   console.log("a is greatest number");
// }
// else if(b>=a && b>=c){
//   console.log("b is the greatest number");
// }
// else{
//   console.log("c is the greatest");
// }

// // Q14 How do you check voting eligibility?
// let age = 15;
// if(age>=18){
//   console.log("You are eligible to vote");
// }
// else{
//   console.log("Not eligible to vote");
// }

// Q15 How do you check leap year?
// let year = 2012;
// if((year%4===0 && year%100!==0)||(year%400===0)){
//   console.log("Leap year");
// }
// else{
//   console.log("Not a leap year");
// }

// // Q16 How do you create grading system using if else?
// let marks = 62;
// if(marks>=90){
//   console.log("Grade A");
// }
// else if(marks>=80){
//   console.log("Grade B");
// }
// else if(marks>=70){
//   console.log("Grade C");
// }
// else if(marks>=60){
//   console.log("Grade D");
// }
// else if(marks>=50){
//   console.log("Grade E");
// }
// else{
//   console.log("Fail");
// }

// Q17 How do you create calculator using switch case?
// let num1 = 6, num2 = 12;
// let ops = '+';
// switch(ops){
//   default:
//     console.log("Invalid Operand");
//   case '+':
//     console.log(num1+num2);
//     break;
//   case '-':
//     console.log(num1-num2);
//     break;
//   case '*':
//     console.log(num1*num2);
//     break;
//   case '/':
//     console.log(num1/num2);
//     break;
// }

// Q18 How do you check vowel or consonant?
// let char = 'E';
// if (
//   char === 'a' || char === 'e' || char === 'i' || 
//   char === 'o' || char === 'u' ||
//   char === 'A' || char === 'E' || char === 'I' || 
//   char === 'O' || char === 'U'
// ) {
//   console.log("character is vowel");
// }
// else{
//   console.log("character is consonant");
// }

// Q19 How do you check number divisible by 3 and 5?
// let num = 15;
// if(num%3===0 && num%5===0){
//   console.log("Number is divisible by both");
// }
// else{
//   console.log("Number is not divisible by 3 and 5");
// }

// Q20 How do you implement FizzBuzz?
// for(let i = 1 ; i <= 100; i++){
//   if(i%3===0 && i%5===0){
//     console.log("FizzBuzz");
//   }
//   else if(i%5===0){
//     console.log("Buzz");
//   }
//   else if(i%3===0){
//     console.log("Fizz");
//   }
//   else{
//     console.log(i);
//   }
// }