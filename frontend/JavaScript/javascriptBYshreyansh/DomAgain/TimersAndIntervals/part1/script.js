// setTimeout(function(){
// console.log("hello");  //sirf ek baar chalega 5s ke baad
// },5000)


// setInterval(function(){
// console.log("hello");  //bar bar cchalega har 5 s ke baad 
// },5000)



// let tm = setTimeout(function(){
//     console.log("hey");                   //Time clear kar deta hai 
//                                        // aise hi setInterval bhi clearhota hai 
// }, 3000);
// clearTimeout(tm)



let count = 10;
let interval = setInterval(function(){
    if(count>=0){
        console.log("count "+count );
 count--;
    }
    else clearInterval(interval)
},1000)



