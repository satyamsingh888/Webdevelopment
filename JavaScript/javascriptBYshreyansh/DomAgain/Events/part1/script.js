


let h1 = document.querySelector('h1')
h1.addEventListener("click",function(){
    h1.style.color = "red";
})


let p = document.querySelector("p")
function dblclick(){
    p.style.color="yellow"
    p.style.backgroundColor = 'black';
}


p.addEventListener("dblclick",dblclick);
// p.removeEventListener("dblclick",dblclick)


let input = document.querySelector('input');
input.addEventListener('input',function(evt){
   if(evt.data !== null){
    console.log(evt.data);
   } 
  
})


// Change input tab chalta hai jab kou select ya textArea me koi change ho jaaye---

let sel = document.querySelector('select');
let selected = document.querySelector('#devices');
sel.addEventListener("change",function(dets){
 selected.textContent = `${dets.target.value} device selected`;
})