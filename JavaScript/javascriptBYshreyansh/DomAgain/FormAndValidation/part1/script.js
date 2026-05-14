'use strict'
let nm = document.querySelector('#name');
let form = document.querySelector('form')

form.addEventListener('submit',function(dets){
    dets.preventDefault();
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let ans = emailRegex.test("singh@test.com");
console.log(ans);
})

