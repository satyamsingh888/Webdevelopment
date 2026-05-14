
let count = 0;
let sec = 5;
let progress = document.querySelector(".progress-bar" );
let percentage = document.querySelector("#percentage")
let start = document.querySelector('#startBtn');



start.addEventListener('click',function(){

    let intv = setInterval(function(){
        if(count<=99){
            count++;
            progress.style.width = `${count}%`
            percentage.textContent= `${count}%`
        }
        else{
            document.querySelector("#status").textContent = 'Downloaded';
            clearInterval(intv);
        }
    },
    (sec*1000)/100
    )
})
