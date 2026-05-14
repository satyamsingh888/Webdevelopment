
//lexical soping------------

function outer(){
    let username = "hitesh"
    function inner(){
        // let secret = "my123"
        console.log("inner", username);
    }
    function innerTwo(){
        console.log("innerTwo", username);
        // console.log(secret);        //error 
    }
    inner();
    innerTwo()
}
outer();



//closure--------------

function makefunc(){
    const name = "Mozilla"
    function displayName(){
        console.log(name);
    }
    return displayName;
}

let myFunc = makefunc();
myFunc();



// document.getElementById('orange').onclick = function(){
//     document.body.style.backgroundColor = 'orange'
// }
// document.getElementById('green').onclick = function(){
//     document.body.style.backgroundColor = 'green'
// }

function clickHandler(color){
  
        // document.body.style.backgroundColor = `${color}`;
      return   function(){
            document.body.style.backgroundColor = `${color}`
        }
    }
 document.getElementById('orange').onclick = clickHandler("orange")
 document.getElementById('green').onclick = clickHandler("green")