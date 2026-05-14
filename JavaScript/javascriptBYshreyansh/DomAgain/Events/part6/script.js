//Event bubbling----- if event not apply on child class then it will apply on parant class


// document.querySelector("#nav").addEventListener("click",function(){
//     alert("clicked")
// })


// let ul = document.querySelector("ul")
// ul.addEventListener("click",function(dets){
// dets.target.classList.toggle("lt")
// })



let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let btn = document.querySelector('button');

btn.addEventListener("click",function(){
    console.log('button click');
})

c.addEventListener('click',function(){
    console.log('c clicked');
},true)
b.addEventListener('click',function(){
    console.log('b clicked');
})
a.addEventListener('click',function(){
    console.log('a clicked');
},true)   //capture phase 

