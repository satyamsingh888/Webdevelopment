// let obj={
//     name:"shreyansh",
//     age:20,
//     job:"developer"
// }

// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.job);
// console.log(obj['name']);
// console.log(obj['age']);

// let aa  = 'name';
// console.log( obj[aa]);



// const obj = {
//     name: 'satyam',
//     address:{
//         city:'USA',
//         PIN:34555,          //Nesting 
//         location:{
//             lat:34.56,
//             lan:45.67,
//         },
//     },
// };

// console.log(obj.address.location.lan);      //deep access

// let {lat,lng} = obj.address.location;       //destructuring
// console.log(lat);




// let obj = {
//     name:'satyam',
//     age:45,
//     email:'xyz@.com',
   
// }
// Object.keys(obj)  //sare key ko array me dal deta h

// for (const key in obj) {
//     console.log(key,obj[key]);  //loop 
// }



// let obj  = {
//    name:'satyam',
//      age:45,
//      email:'xyz@.com',                   //object assigne
// }
// // let obj2 = {...obj}
// let obj2 = Object.assign({location:'india'},obj);
// console.log(obj2);


//Deep cloning------------------------->
// let obj = {
//     name:'satyam',
//       age:45,
//     email:'xyz@.com',
//     address:{
//         city: 'bhopal',
//     },
// };
// let obj1 = {...obj};
// obj1.address.city = 'indore';
// console.log(obj);       //wrong method becase ye dono me change kar dega
// console.log(obj1);

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.address.city = 'indore';
// console.log(obj);
// console.log(obj2);       //wright method

//or
// let obj2 = structuredClone(obj);   // another method (new)
// obj2.address.city = 'indore';
// console.log(obj);
// console.log(obj2)


//  let obj = {
//     name:'satyam',
//       age:45,
//     email:'xyz@.com',
//     address:{
//         cities: 'bhopal',
//     },                           //optional chaining---------------
// };

// console.log(obj?.address?.city);


// let role = 'admin';
//   let obj = {
//      name:'satyam',
//        age:45,
//      email:'xyz@.com',
//      address:{
//         cities: 'bhopal',
//      },    
//      [role]:'singh'                       //computer properties---------------
//  };
//  console.log(obj);


//Destructure the key 'first-name'as variable called firstname------
// const user={
//     'first-name': 'satyam'
// };
// let {'first-name': firstName}=user;
// console.log(firstName);


// const course = {
//     name:'javascript',
//     price: 999,
//     courseInstructor: {
//         name:'satyam',
//         email:'xyz@.com',
// },
// };

// Object.entries(course).forEach(function(val){
//     console.log(val[0] +':'+val[1]);
// })


const name = 'satyam';
const first = ()=>{
    let a = 1;
    let b = second();
    return a+b;
}
function second(){
    let c = 2;
    return c;
}
console.log(first());


