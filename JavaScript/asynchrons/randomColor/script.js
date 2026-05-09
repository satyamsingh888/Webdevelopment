//random generate color------------
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let body = document.querySelector('body');
let clearIntervalId;
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;

}

const startChangingColor = function(){
    function changeBackground() {
        
        body.style.backgroundColor =randomColor();
    }
    clearIntervalId =  setInterval(changeBackground,1000)
   
};


const stopChangingColor = function(){
clearInterval(clearIntervalId);
clearIntervalId = null
};


start.addEventListener("click",startChangingColor)


stop.addEventListener("click",stopChangingColor)