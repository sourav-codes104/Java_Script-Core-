
/* ===========================
JS PRACTICE SHEET 6 (Objects)
===========================

// Q51 How do you create object with name age city?
// Q52 How do you access object properties?
// Q53 How do you add new property in object?
// Q54 How do you delete property?
// Q55 How do you loop object using for-in?
// Q56 How do you count number of properties?
// Q57 How do you merge two objects?
// Q58 How do you access nested object?
// Q59 How do you convert object to keys and values array?
// Q60 How do you calculate student average marks using object?

*/

// Q51 How do you create object with name age city?
// let obj ={
//   name:"Sourav Singh",
//   age:23,
//   city:"Indore"
// }

// console.log(obj);

// Q52 How do you access object properties?
// let obj ={
//   name:"Sourav Singh",
//   age:23,
//   city:"Indore"
// }
// console.log(obj.name);

// Q53 How do you add new property in object?
// let obj ={
//   name:"Sourav Singh",
//   age:23,
//   city:"Indore"
// }

// obj.address="vijay nagar";
// console.log(obj);

// Q54 How do you delete property?
// let obj ={
//   name:"Sourav Singh",
//   age:23,
//   city:"Indore"
// }
// delete obj.city;
// console.log(obj);

// Q55 How do you loop object using for-in?
// let obj ={
//   name:"Sourav Singh",
//   age:23,
//   city:"Indore"
// }

// for(let key in obj){
//   console.log(`${key} : ${obj[key]}`);
// }

// Q56 How do you count number of properties?
// let obj ={
//   name:"Sourav Singh",
//   age:23,
//   city:"Indore"
// }
// let count = 0;
// for(let key in obj){
//   count++;
// }
// console.log(count);

// console.log(Object.keys(obj).length);

// Q57 How do you merge two objects?
// let obj = {
//   name:"Sourav Singh",
//   age:23,
//   city:"Indore",
//   college:"AITR"
// }

// let obj2 = {
//   name : "shraddha kapoor",
//   age : 39,
//   city : "Mumbai",
//   university : "Xavier's"
// }

// let new_obj = {obj,obj2};
// console.log(new_obj);

// Q58 How do you access nested object?
// let obj = {
//   name:"Sourav Singh",
//   age:23,
//   city:"Indore",
//   college:"AITR",
//   family :{
//     father : "Satish Singh",
//     mother : "Meera Singh",
//     total_members : 11
//   }
// }

// let target = obj.family.mother;
// console.log(target);

// Q59 How do you convert object to keys and values array?
// let obj2 = {
//   name : "shraddha kapoor",
//   age : 39,
//   city : "Mumbai",
//   university : "Xavier's"
// }

// let arr = Object.entries(obj2);
// console.log(arr);

// Object.keys(obj2); = keys array
// Object.values(obj2); = values array

// // Q60 How do you calculate student average marks using object?
// let marks = {
//   Maths : 45,
//   Science : 72,
//   English : 34,
//   social : 83,
//   Hindi : 99
// }
// // let avg = 0 ,sum = 0, count = 0;
// // for (let key in marks){
// //   sum+=marks[key];
// //   count++;
// // }

// // avg = sum/count;
// // console.log(avg);

// let values = Object.values(marks);
// let sum = values.reduce((acc,curr)=>acc+curr,0);
// let avg = sum / values.length;
// console.log(avg);