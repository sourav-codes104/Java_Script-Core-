/* ===========================
JS PRACTICE SHEET 3 (Loops)
===========================

// Q21 How do you print numbers 1 to 10 using for loop?
// Q22 How do you print numbers 10 to 1 using while loop?
// Q23 How do you print even numbers from 1 to 50?
// Q24 How do you print multiplication table?
// Q25 How do you find sum of first 100 numbers?
// Q26 How do you calculate factorial?
// Q27 How do you reverse a number?
// Q28 How do you count digits of a number?
// Q29 How do you check palindrome number?
// Q30 How do you print star pattern?

*/

// Q21 How do you print numbers 1 to 10 using for loop?
// for(let i = 1; i<=10 ; i++){
//   console.log(i);
// }

// Q22 How do you print numbers 10 to 1 using while loop?
// let num = 10;
// while(num>=1){
//   console.log(num);
//   num--;
// }

// Q23 How do you print even numbers from 1 to 50?
// for(let i = 1; i <= 50; i++){
//   if(i%2===0){
//     console.log(i);
//   }
// }

// Q24 How do you print multiplication table?
// let num = 7;
// for(let i = 1; i <= 10; i++){
//   console.log(`${num}*${i} = ${i*num}`);
// }

// Q25 How do you find sum of first 100 numbers?
// let sum = 0;
// for(let i = 1 ; i <= 100; i++){
//   sum+=i;
// }
// console.log(sum);

// Q26 How do you calculate factorial?
// let num = 5, i = 1;
// let fact = 1;
// while(i<=num){
//   fact = fact*i;
//   i++;
// }
// console.log(fact);


// Q27 How do you reverse a number?
// let num = 1234;
// let ans = 0;
// while(num!=0){
// ans=ans*10+(num%10);
// num=Math.floor(num/10);
// }
// console.log(ans);

// Q28 How do you count digits of a number?
// let num = 1234569;
// let count = 0;
// while(num!=0){
//   count++;

//   num=Math.floor(num/10);
// }

// console.log(count);

// Q29 How do you check palindrome number?
// let num = 1221;
// let num1 = num;
// let ans = 0;
// while(num!=0){
// ans=ans*10+(num%10);
// num=Math.floor(num/10);
// }

// if(num1===ans){
//   console.log("Palindrome Number");
// }
// else{
//   console.log("Non-Palindrome Number");
// }

// Q30 How do you print star pattern?
// for(let i=0 ; i<5; i++){
//   for(let j=0; j<=i; j++){
//     process.stdout.write("* ");
//   }
//   console.log();
// }
// NOTE: use process.stdout.write() for writing in same line.

