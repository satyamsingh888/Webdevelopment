// function stringToNumber(string){
//     const task1 =  Number(string);
//    return isNaN(task1) ? 'not a number' : task1;
// };
// console.log(stringToNumber("12a34"));

// function flipBoolean(bool){
// const task  = Boolean(bool);
// return task ? false : true;
// }
// console.log(flipBoolean(true));
// ;

// function whatAmI (str){
// if(typeof str === 'string'){
//     return 'i am a string';
// } else if (typeof str === 'number'){
//     return 'i am a number';

// }
// };
// console.log(whatAmI("abc23"));

// function whatAmI(str){
//     return typeof str ===('string') ?'i am a string' : 'i am a number';
// }
// console.log(whatAmI(123));

// function isItTruthy(value){
//     return value ? 'truthy' : 'falsy';
// }
// console.log(isItTruthy(true));        // "It's truthy!"
// console.log(isItTruthy(false));       // "It's falsey!"
// console.log(isItTruthy(1));           // "It's truthy!"
// console.log(isItTruthy(0));           // "It's falsey!"
// console.log(isItTruthy("Hello"));     // "It's truthy!"
// console.log(isItTruthy(""));          // "It's falsey!"
// console.log(isItTruthy(null));        // "It's falsey!"
// console.log(isItTruthy(undefined));   // "It's falsey!"
// console.log(isItTruthy(NaN));         // "It's falsey!"
// console.log(isItTruthy([]));          // "It's truthy!"
// console.log(isItTruthy({}));          // "It's truthy!"
// console.log(isItTruthy(function(){})); // "It's truthy!"