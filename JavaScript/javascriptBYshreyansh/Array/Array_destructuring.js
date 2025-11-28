// Normal array destructuring(old);
// let arr = [3,4,5,];
// let arr1  =arr[0];
// let arr2  =arr[1];
// let arr3  =arr[2];
// console.log(arr1,arr2,arr3);


//New way----
// let arr = ['satyam',21,'Developer'];
// let [name,age,jobRoll] = arr;
// console.log(name,age,jobRoll);


//skiping element-----
// let arr = ['satyam',21,'Developer'];
// let[name,,jobRoll] = arr;
// console.log(name);
// console.log(jobRoll);


//Default value----
// let arr = ['satyam'];
// let[name,age=24] = arr;
// console.log(name,age);


// swapping value(old)----------------->
// let a = 2,b= 3;
// let temp = a;
// a = b;
// a = temp;
// console.log(a,b);

//New----
// let a =2,b=3;
// [a,b]= [b,a];
// console.log(a,b);




//Nested destructuring------------------>
// let data = ['satyam',[21,'Developer']];
// let [name,[age,jobRole]] = data;
// console.log(name,age,jobRole);



// rest operartor in destructuring----------------->
// let arr = [2,3,4,5,6];
// let [num1,num2,...val] = arr;
// console.log(num1,num2,val);


// function return value---------------
// function getCordinate(){
//     return [23.45,12.45];
// }
// let [longitude,latitude] = getCordinate();
// console.log(longitude,latitude);


