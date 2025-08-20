function stringToNumber (num){
let number = Number(num);
// if(isNaN(number)){
//     return `Not a number`;
// } else {
//     return num;
// }
return isNaN(number)?`not a number`:num;
}
// console.log(stringToNumber('1234'));




function flipBoolean(str){
   return !Boolean(str);
}
// console.log(flipBoolean(false));



function whatIam (str){
const type = function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findMax([3, 4, 5, 67, 100]));
Number(str)
return isNaN(type)?`it is string`:`it is number`
}
// console.log(whatIam('singh'));


function isItTruthy(bool){
    return Boolean(bool)?`truthy`:'falsy'
}
// console.log(isItTruthy(NaN));

function mathMatical(a,){
    return ++a;
}
// console.log(mathMatical(2));



//Array------------
function filterNumber(arr){
// let newArr = [];
// for (let i of arr){
//     if(typeof i === 'number'){
//        newArr.push(i)
//     }
// }
// return newArr;
return arr.filter(i => typeof i ==="number")
}
// console.log(filterNumber([2,3,"singh",4.676]));


function reverseArray(arr){
    const newArray =[];
   for(let i =arr.length -1; i>=0; i--){
    newArray.push(arr[i]);
}
return newArray;
}
console.log(reverseArray([2,3,4,5,6]));


function findMax(arr){
   let max =arr[0];
   for(let i=1; i<arr.length; i++){
   if(arr[i]>max){
    max = arr[i] ;
   }
}
return max;
}
console.log(findMax([3,4,5,67,100]));
