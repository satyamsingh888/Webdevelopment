const myObj = {
    js: 'JavaScript',
    rb: 'Ruby',
    py: 'Python',
    swift:'swift by apple',
};

for (const key in myObj) {
    // console.log(`${key} is for ${myObj[key]}`);
}


const programming = ['js','rb','py','java','cpp'];
for (const key in programming) {
    // console.log(programming[key]);
}


//FOR Each loop------------------------------



// const coding = ['js','rubi','java','python','cpp'];

// coding.forEach(function(item){
//     console.log(item);
// })



// coding.forEach((val) => {
//     console.log(val);
// })



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);


// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);
// });

const myCoding = [
    {
        language: 'javaScript',
        languageFileName:'js',
    },
    {
        language: 'java',
        languageFileName:'java',
    },
    {
        language: 'python',
        languageFileName:'py',
    }
]

myCoding.forEach((item)=>{
    // console.log(item.language);
})



// const coding = ['js','rubi','java','python','cpp'];
// const value = coding.forEach((item)=>{
//     console.log(item);
// });
// console.log(value);


const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((num)=>{
//    return  num >4;
// });
// const newNums = [];
// myNums.forEach((num) =>{
//  if(num>4){
//     newNums.push(num);
//  }
// })
// console.log(newNums);



const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums =  myNumbers.map( (num) => num+10)
// console.log(newNums);
// const newArr = [];
//  myNumbers.forEach((num)=>{
//   return newArr.push(num+10);
// });
// console.log(newArr);

const newNums = myNumbers
                .map((num)=>num*10)
                .map((num) =>num+1)
                .filter((num) =>num>=40)
                console.log(newNums);




  
                
//Reduce Method--------------------
const nums = [1,2,3,7,9];
const total = nums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and curVal: ${currVal}`)
    return acc + currVal
},0)       

// const total= nums.reduce((acc,curr) =>acc+curr,0)

console.log(total);

// let sum = 0;
// for(let i =0; i<nums.length; i++){
//     sum+=nums[i];
// }
// console.log(sum);


const shoppingCart = [
    {
        itemName: 'js Course',
        price: 2999
    },

    {
        itemName: 'Py Course',
        price: 1999
    },

    {
        itemName: 'java Course',
        price: 4999
    },
];

const totalCourse = shoppingCart.reduce((acc ,item)=>acc + item.price,0);
console.log(totalCourse);