/* ========================
JS PRACTICE SHEET 4 (Functions)
===========================

// Q31 How do you create function to add two numbers?
// Q32 How do you create function to check even or odd?
// Q33 How do you create function returning square?
// Q34 How do you create function returning largest of three numbers?
// Q35 How do you reverse string using function?
// Q36 How do you count vowels using function?
// Q37 How do you check palindrome string using function?
// Q38 How do you use default parameters?
// Q39 How do you convert function into arrow function?
// Q40 How do you call one function inside another?

*/

// Q31 How do you create function to add two numbers?
// function add(a,b){
//   return a+b;
// }

// console.log(add(5,6));

// Q32 How do you create function to check even or odd?
// function even_odd(a){
//   if(a%2===0){
//     console.log("Number is even");
//   }
//   else{
//     console.log("Number is odd");
//   }
// }

// even_odd(12);

// Q33 How do you create function returning square?
// function square(a){
//   return a*a;
// }

// console.log(square(7));

// Q34 How do you create function returning largest of three numbers?

// function largest(a,b,c){
//   if(a>=b && a>=c){
//     return a;
//   }
//   else if(b>=c && b>=a){
//     return b;
//   }
//   else{
//     return c;
//   }
// }

// console.log(largest(5,9,2));

// Q35 How do you reverse string using function?
// function reverse(str){
//   let rev="";
//   for(let i =  str.length-1 ; i >= 0 ; i--){
//     rev+=str[i];
//   }
//   return rev;
// }
// console.log(reverse("sourav"))

// Q36 How do you count vowels using function?
// function count_vowel(word){
//   let count = 0;
//   for(let i = 0 ; i < word.length; i++){
//     if(word[i]==="a"||word[i]==="A"||word[i]==="e"||word[i]==="E"||word[i]==="i"||word[i]==="I"||word[i]==="o"||word[i]==="O"||word[i]==="U"||word[i]==="u"){
//       count++;
//     }
//   }
//   return count;
// }

// console.log(count_vowel("sourav"));

// Q37 How do you check palindrome string using function?
// function reverse(str){
//   let rev="";
//   for(let i =  str.length-1 ; i >= 0 ; i--){
//     rev+=str[i];
//   }
//   if(rev===str){
//     return 1;
//   }
//   return -1;
// }
// console.log(reverse("nayan"));

// Q38 How do you use default parameters?

// function greet(name="guest"){
//   console.log("Hello "+name);
// }
// greet();
// greet("vinay");

// Q39 How do you convert function into arrow function?
// let greet=()=>{
//   console.log("Hello everyone");
// }

// greet();

// Q40 How do you call one function inside another?
// let add = (a,b)=>{
//   return a+b;
// }
// let sum = (a,b)=>{
//    return add(a,b);
// }
// console.log(sum(5,6));