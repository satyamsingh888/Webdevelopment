// function dance(v1){
//     console.log(`${v1} is dancing`);
// }
// dance("ghoda"); 


// function a(v1=2,v2=2){   //default parameter
// console.log(v1+v2);
// }
// a(3,3);




//rest-----
//jab arguments kai sare ho to humain utne hi parameter bananane padenge, issse bachne ke liye , hum (rest) ka use  karte hai agar ... funtion ke parameter space mein lage to wo rest operator hai

// function abcd(a,b,...c){
//     console.log(a,b,c);
// }
// abcd(1,2,3,4,5,6);

// --type array hota hai 
// --  last me likha jata hai parameter me 



//return ------------
// jaha se aaya hai wahi dal denge
// function ret(v){
//     return 12 +v;
// }

// console.log(ret(34));



//First class Funtion---------------
//funtion ko vlaues ki tarah treat kar sakte hai---
// function abcd(val){
// val();
// }
// abcd(function(){
//     console.log("hel");
// })


//higher order function---------------
//aise function jo return kare function ya fir accept kare ek function apne parameter me 

// function abcd(){
//     return function(){
//         console.log("hell");
//     }
// }
// abcd()();


// function greet(){
//     return function(){
//         console.log('hello');
//         return function(){
//             console.log("satyam");
//         }
//     }
// }
// greet()()();

// function abcd(operation ,x,y){
// return operation(x,y);
// }
// function add(a,b){
// return a+b;
// }
// console.log (abcd(add,6,4));


//Pure vs Impure Function ---------------------------

//Aisa function jo ki baahar ki value ko na badle pure fnc----------
// let a =34;
// function abcd(){
// console.log('hell');
// }
//Aisa fnc jo ki bahar ki value ko badal de impure fnc -----------
// function abcd(){
//     a++;
// }



// Closures ---------------------------------------->
//ek funtion jo return karega ek aur function aur return hone wala function hamesha use karega parent function ka koi  variable 
// function abcd(){
//     let a = 12;
//    return  function(){
//         console.log(a);
//     }
// }
// abcd()();

// function outer(){
//     let name = "satyam";
//      function inner(){
//         console.log(`hello ${name}`);
//     }
//     return inner;
// }
// const store = outer();
// store();


//lexical Scoping --------------------------------
//kise variable ka scope kaha tak hai , use kaha tak kar sakte h 
//child function can be access parent function variable ---
// function abcd(){
//     let a = 12;
//     function def(){
//         let b= 34;
//         function bgh(){
//             let c = 35;
//         }
//     }
// }


//IIFE(Immediately invoked Function and Expression )---------------------------->
//call karneki jaroort nahi parti immidiate chal jata h 
// (function(){
// console.log("hello");
// })();


//Hoisting in function-------------
//banne se pahle use kar pa raha hu--
//function declaration  me hoisting kaam karta hai but fnc expression me hoisting kaam nahi karta hai ---

// abcd();

// function abcd(){
//     console.log("hello");
// }





// practice--------------------------------------------------------
// abcd();
// const abcd = function(){
//     console.log('hello');    //Refrence Error 
// }


// const multiply = (a,b)=> a*b;
// console.log( multiply(2,3));


// function abc(...val){
//     console.log(val);
// }
// abc(3,4,5,56,)


// function abc(...score){
//     let total = 0;
// score.forEach(function(val){
// total = total+val
// })
// return total;
// }
// console.log( abc(3,4,5,5,6,6,));


// function checkAge(age){
// if(age<18) return "Too young";
// else if (age===18) return "perfect"
// return "Allowed";
// }
// console.log(checkAge(18));


// function abc(){
//     return ;
// }                          //return undifind
// console.log( abc());


//Pass a function into another funtion and execute it inside--------
// function abc(val){
// val();
// }
// abc(function(){
//      console.log( ("hel"));
// })

// function name(rgh){
//     console.log(2+4);
//     return rgh();
// }

// function sing(){
//     console.log(2*4);
// }
// name(sing)


// function outer(){
//     let count= 0;
//     return function(){
//         count++;
//         console.log(count);    
// }}
// let counter = outer();
// counter();
// counter();
// counter();
// counter();

// function bmi(weight, height){
//     return weight/(height*height);
// }
// console.log(bmi(85,1.7).toFixed(2));


// function discountCal(discount){
//     return function(price){
//         return price - price *( discount/100);
//     }
// }
// const ten = discountCal(10);
// const twenty = discountCal(20);
// console.log(ten(200));
// console.log(twenty(200));


// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// let c = counter();
// console.log( c());
// console.log( c());
// console.log( c());

// function one(){
//     return "one";
// }
// function two(){
//     return one();
// }
// function three(){
//     console.log("one");
//    return  one();
// }
// let x = three();
// console.log(x);




