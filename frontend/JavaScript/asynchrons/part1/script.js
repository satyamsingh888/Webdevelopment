// let h = document.querySelector('h1');
// let stopButton = document.querySelector('#stop');
// const sayname = function(){
// h.textContent = "satyam singh"

// }
// const clearName = setTimeout(sayname,2000)

// stopButton.addEventListener('click',function(){
//     clearTimeout(clearName)

//     console.log('stopped');
// })

// ------------------------------------------------------


const h = document.querySelector('h1');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let intervalID;

start.addEventListener("click",function(){
const sayDate = function(){
    console.log("satyam",Date.now());
   
}
 intervalID = setInterval(sayDate,2000)

})
stop.addEventListener("click",function(){
    clearInterval(intervalID);
})


 