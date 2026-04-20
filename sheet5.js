/* ===========================
JS PRACTICE SHEET 5 (Arrays)
===========================

// Q41 How do you create array and access first and last element?
// Q42 How do you find length of array?
// Q43 How do you add element using push and unshift?
// Q44 How do you remove element using pop and shift?
// Q45 How do you loop array using for loop?
// Q46 How do you loop array using for-of?
// Q47 How do you find largest number in array?
// Q48 How do you find sum of array elements?
// Q49 How do you reverse array without reverse()?
// Q50 How do you remove duplicates from array?

*/

// Q41 How do you create array and access first and last element?
// two ways:
//1
// let arr = [1,2,3,4,5,6];
// // console.log(arr[0]);
// // console.log(arr[arr.length-1]);
// //2
// console.log(arr.at(0));
// console.log(arr.at(-1));

// Q42 How do you find length of array?
// let arr = [1,2,3,4,5,6];
// console.log(arr.length);

// Q43 How do you add element using push and unshift?
// let arr = [1,2,3,4,5,6];
// arr.push(7);
// console.log(arr);
// arr.unshift(8);
// console.log(arr);

// Q45 How do you loop array using for loop?
// let arr = [2,7,4,8,9,10];
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// Q46 How do you loop array using for-of?
// let arr = [1,2,3,4,5];
// for(let value of arr){
//   console.log(value);
// }

// Q47 How do you find largest number in array?
// let arr = [1,2,3,2,1];
// let ans = Math.max(...arr);
// console.log(ans);
// let max = 0;
// for(let value of arr){
//   if (max<value){
//     max = value;
//   }
// }
// console.log(max);

// Q48 How do you find sum of array elements?
// let arr = [1,2,3,4,5];
// let sum = 0;
// for(let value of arr){
//   sum+=value;
// }
// console.log(sum);

// Q49 How do you reverse array without reverse()?
// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr);
// let brr = [1,2,3,4,5];
// for(let i = 0 , j = brr.length-1; i < Math.floor(brr.length/2); i++, j--){
//   [brr[i],brr[j]]=[brr[j],brr[i]];
// } 
// console.log(brr);

// Q50 How do you remove duplicates from array?
// using filter
// let arr = [1,2,1,3,3,2,4,5,3,6];
// let new_arr = arr.filter((value,index)=>arr.indexOf(value)==index)
// console.log(new_arr);

// //using reduce
// let brr = arr.reduce((acc,value)=>{
//   if(!acc.includes(value)){
//     acc.push(value);
//   }
//   return acc;
// },[])

// console.log(brr);

