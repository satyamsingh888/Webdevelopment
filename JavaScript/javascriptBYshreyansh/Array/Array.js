//MOdified array---
// let arr= [3,4,5];
// arr[2]=12;
// console.log(arr);


// Methods of Array---------------------------------------->
// let arr = [1,2,3,45];
// arr.push(100);                   //push method
// console.log(arr);


// let arr = [3,4,5,6];
// arr.pop();                   //pop
// console.log(arr);


// let arr = [3,4,5,6,6];
// arr.unshift(4);                                         //shift and unshift
// console.log(arr);
// arr.shift();
// console.log(arr);



// let arr = [3,5,6,7,4];
// arr.splice(3,1);   
//                                       //splice apne marzi se dlt kar sakte ho element ko
// console.log(arr);


// let arr = [3,4,5,6];
// let newarr = arr.slice(1,3);             //slice copy banata h lekin original array me bilkul ched chadnahi karta
// console.log(newarr);



// let arr = [3,4,5,6];                         //reverse  array ko ulta kar deta h 
// arr.reverse();
// console.log(arr);


// let arr = [4,5,6,6,7]
// let sort = arr.sort(function(a,b){
//     return b-a;                             //sort method if b-a ho to desending order me change kar dega, if a-b ho to assending order
// })
// console.log(sort);



//Method---------->  required function on it 

// for Each-------------->

// let arr = [3,4,5,5,66];
// let arr1 =[];
// arr.forEach(function(val){
// arr1.push(val*2);
// })
// console.log(arr1);



//map------------------------------>

// map tab use krna hai jab ek naya array banana hai pichle array ke data ke base par 
//map dikhte sath man me ek blank array bana liya karo
//jab bhi aapko ek aisa case dikh jaaye jaha ek array se naya array banega and wo naya array kuch value rakhega tab map lagega
// let arr = [2,3,4,5,6];
// const newArr = arr.map(function(val){
// return 12;
// })
// console.log(newArr);


// let arr = [34,5,632,56];
//  const newArr = arr.map(function(val){
// if(val>10) return val;
// })
// console.log(newArr);



// fileter method--------------------------->
let arr = [1,2,3,4,5,6,7];
const newArr =  arr.filter(function(val){
if(val>4) return true;
})
console.log(newArr);


// reduce------------------------->
// let arr =[2,3,4,56,7,8];
// const newArr = arr.reduce(function(accumulator,val){
//     return accumulator+val
// },0)                              //0 generally show kar raha h accumulator ki value initial me kitni rakhni h 
// console.log(newArr);

// let arr = [2,3,4,56,7,8];
// const newArr = arr.reduce((accumulator,val)=>accumulator+val ,0);
// console.log(newArr);


// find----------------->
//find hamesa arrray ke andar se pahla element return karta hai agar condition match kare tab baki ko ignore karta hai  consition match na hone par undifined show karta hai ----
// let arr = [3,4,5,56];
// let va = arr.find(function(val){
//     return val<56;
// })
// console.log(va);



// some method--------------------------------->
// let arr = [3,4,5,56];
// let va = arr.some(function(val){
//     return val<56;               //sabko check karega agar ek bhi setisfied hua to true kar dega.
// })
// console.log(va);



//every method------------------------------>
// let arr = [3,4,5,6,7];
// const newArr = arr.every(function(val){
// return val>4;
// })                           //sare elements ko check karega agar ek bhi unsetisfied hua to false print karega
// console.log(newArr);




// practice----------------------->

// let fruit = ['banana','guavava'];
// fruit[0]='sev';
// console.log(fruit);


//add element at index[1]----------------->
// let arr = ['black','green'];        
// arr.splice(1,0,'red','Blue');
// console.log(arr);



//Extraxt only the 3 elements in array from middle--------->
// let item=  [1,2,3,34,5,6,6];
// let newArr = item.slice(2,5);
// console.log(newArr);


// sort arry alphabetically and then reverse it-----------
// let names = ['Mohan','Sohan','Rahul','Ram'];
//  names.sort().reverse();
// console.log(newNames);


//use .map() to square each number------------------
// let num = [3,4,5,6];
// let newNum = num.map(function(val){
// return val*2;
// })
// console.log(newNum);
 


//use.filter() to keep numbers greater than 10;
// let num = [23,4,5,7];
// let check = num.filter( (val)=>{
//     return val>10
// })
// console.log(check)

// let fullName = ["satyam", 'singh'];
// let [firstName,lastName]= fullName;
// console.log(firstName,lastName);


// let countries = ['USA','UK'];
// countries = ['India',...countries];
// console.log(countries);


