let heading = document.getElementById("heading")
// console.dir(heading);

let hey = document.getElementsByClassName('hey');
// console.log(hey);


let h3 = document.querySelector('h3');
// console.dir(abcd);
h3.textContent='helo satyam kaise ho';
h3.innerHTML = "<i>kya hal hai <i>"
// h1.hidden = true
 


let a = document.querySelector("a");
// a.href = 'https://google.com'
// a.setAttribute("href",'https://amazone.com')
// console.dir( a.getAttribute('href'));
let remove = a.removeAttribute('href')
console.log(a);



let img = document.querySelector('img')
img.setAttribute(
  "src",
  "https://m.media-amazon.com/images/I/71YWNcUG6-L._UF1000,1000_QL80_.jpg" 
);



// ----------------------------------------

let h1 = document.createElement('h1');
h1.textContent = 'hello ji';
document.querySelector('body').prepend(h1)

h3.remove()
