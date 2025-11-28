
'use strict';
let h1 = document.createElement('h1');
h1.textContent = 'kya haal hai';
let div = document.querySelector('div');
div.prepend(h1) 


// div.style.display = 'flex';

h1.style.backgroundColor = 'red';
h1.style.border = '2px solid blue';
h1.style.padding = '5px';
h1.style.margin = '5px';
h1.style.textTransform = 'capitalize';

h1.classList.add('olele')

let hutbe = document.querySelector('.hutbe')
// hutbe.classList.remove('hutbe')
hutbe.classList.toggle('hutbe') // toggle use for agar lagi hai to hatado , hati hai to lagado 


let multipleSelector = document.querySelectorAll('.buy-now')
// console.log(multipleSelector);


let lis = document.querySelectorAll('li');
lis.forEach(function(val){
//  console.log(val.textContent);
});


for(let i =0; i<lis.length;i++){
// console.log(lis[i].textContent);
}


let p = document.querySelector('p')
p.innerHTML = '<b>Updataded by javascript</b>'


let img = document.querySelector('img')
// console.log( img.getAttribute('src'));
img.setAttribute(
  "src",
  "https://i.pinimg.com/736x/c2/2d/99/c22d99fb63f24d625168a38f5009b9b6.jpg"
);


let a = document.querySelector('a')
// a.href = 'https://www.amazone.com'
a.setAttribute("href", "https://www.amazone.com");


let tit = document.querySelector('.another-div');
tit.setAttribute('title','kya haal');

let disable = document.querySelector('.button-disable')
disable.removeAttribute('disabled')


//For removinf an element from div--------------
let removeChild = document.querySelector('.div')
console.dir(removeChild);
removeChild.remove(h1)

//adding another li with textcontent in unorderd list
let ul = document.querySelector('.new-ul');
let li = document.createElement('li');
li.textContent = 'elephant';
ul.appendChild(li)



//insert images in div and also add class and add property of images
let img1 = document.createElement('img');
img1.setAttribute(
  "src",
  "https://i.pinimg.com/736x/65/e2/cd/65e2cd6d0b5bfbe612bc973e36dc7cb9.jpg"
);
// img1.setAttribute('height','100px')
img1.classList.add('placeholder')  //Adding class
let div1 = document.querySelector('.insert-img')

div1.prepend(img1)



//delete first item from the list 
let unOrderd = document.querySelector('.ul');
let list = document.querySelector('.li');
// unOrderd.removeChild(list)


//highlight all class to every even item in a list
let even = document.querySelectorAll('.ul li:nth-child(2n)');
even.forEach(function(li){
  li.classList.add('highlight');
});


