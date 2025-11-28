let h1 = document.querySelector('h1');
h1.addEventListener('click',function(){
    h1.style.color='red';
    h1.style.backgroundColor= 'yellow'
})
 
// let p = document.querySelector('p'); 
// p.addEventListener('click',function(){
//    p.style.color = 'aqua';
// }) 


// let p = document.querySelector('p');
// p.addEventListener('dblclick',function(){     
//     p.style.color='aqua';
// })


//element.addEventListner('event name', function(){
// code
// })

let para = document.querySelector('p');
function singh(){
    para.style.color = 'red'
}
para.addEventListener('dblclick',singh);
para.removeEventListener('dblclick',singh);


let inp  = document.querySelector('input');
const add = (arg)=>{
    if(arg.data!==null){
        console.log(arg.data);
    }
}
inp.addEventListener('input',add)



//Change Event tab chalta hai jab apka koi input select ya text area mai koi change ho jaaye
let select = document.querySelector('#select');
let sel = document.querySelector('select');
sel.addEventListener("change",function(e){
select.textContent = `${e.target.value} devices selected`
})

