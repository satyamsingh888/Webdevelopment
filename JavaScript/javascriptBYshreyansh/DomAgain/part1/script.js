let heading = document.getElementById("heading")
// console.dir(heading);

let hey = document.getElementsByClassName('hey');
// console.log(hey);


let h3 = document.querySelector('h3');
// console.dir(abcd);
h3.textContent='helo satyam kaise ho';
h3.innerHTML = "<i>kya hal hai <i>"
// // h1.hidden = true
 


let a = document.querySelector("a");
// a.href = 'https://google.com'
a.setAttribute(
  "href" , "https://amazon.com",
 
)
console.dir( a.getAttribute('href'));
a.setAttribute(
  "target" , "__blank"
 
)
// console.dir( a.getAttribute('href'));
// let remove = a.removeAttribute('href')

console.log(a);



let img = document.querySelector('img')
img.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40W5iv05kWtQ5-R5mcD_ozIXiUMeSnRoRo7Asxj6K4M-JV6ZE8htCsqdXLMabboAEqm-KE7pmeBFc9ersMDDKPxMf4oWR7aWgdPb9rpI&s=10" 
);



// ----------------------------------------

let h1 = document.createElement('h1');
h1.textContent = 'hello ji';
document.querySelector('body').prepend(h1)

// h3.remove()