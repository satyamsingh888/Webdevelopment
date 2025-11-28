//Set is an object that stores unique values of any type.
//👉 It solves the biggest problem of arrays: duplicate values
// 👉 And gives much faster search (.has()) than arrays (.includes())

// let arr = [2,3,3,4,5];
// let unique = new Set(arr);
// console.log(unique);                     

//Create a Set------
// const mySet = new Set();

// or ---
// const mySet = new Set([1, 2, 3, 4]);


// Method -----------------

const set = new Set();
set.add(1);
set.add(2);
set.add(3);                             //Adding value
set.add(4);
set.add(5);
set.add(6);
set.add(6);             //ignore duplicate value
// console.log(set);


// console.log(set.has(3));       //check if value exist in set or not 

const delSet = new Set([3,34,5,67,5])
console.log(delSet.size);     //set size
delSet.delete(34);
console.log(delSet);                //delete element from the set

delSet.forEach((value) =>{
console.log(value);               //looping set
})

// delSet.clear();
// console.log(delSet);             //clear all elements from the set


const arr = [...delSet];
console.log(arr);                //convert set into arr


// const unique = [...new Set(arr)];
// console.log(unique);                // remove duplicates


 
