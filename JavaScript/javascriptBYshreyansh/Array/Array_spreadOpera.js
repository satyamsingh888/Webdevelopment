
//  it canbe create a new array but it will not change a original array---
// let arr = [4,3,5,6,2];
// let arr1 = [...arr];     
// console.log(arr1);


//Merging array-------------->
// let vehical = ['bus','car'];
// let vehical1 = ['moto','train'];
// let allItems = [...vehical,...vehical];
// console.log(allItems);


//Passing arrAY element as argument----
// function add(a,b,c){
//     return a+b+c;
// }
// let num = [3,4,5];
// console.log(add(...num));


// Adding elemnt easily----------------->
// let element = [2,3];
// let arr  = [1,...element,4,5];
// console.log(arr);

// Spread
// let arr1 = [1,2,3];
// let arr2 = [...arr1, 4,5]; // Expands arr1

// // Rest
// function sum(...nums) {  // Collects arguments into array
//   return nums.reduce((a,b)=>a+b);
// }
// console.log(sum(1,2,3,4)); // 10
