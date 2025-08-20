// let sum = 0;
// for(let i = 1; i<=5; i++){
//     sum += i;
// }
// console.log(sum);

// let sum1 = 0;
// let i = 0;
// while(i<=5){
//     sum1 +=i;
//     i++;
// }


// let i = 5;
// let countdown = []
// while(i>0){
// countdown.push(i);
// i--;
// }
// console.log(countdown);


// let teaCollection = []
// let tea;
// do {
// tea = prompt(`Enter your favourite tea (type"stop" to finish)`);
// if(tea!=="stop"){
// teaCollection.push(tea);
// }
// }while (tea!=="stop");

// let total =0;
// let k  = 1;
// do{
// total +=k;
// k++;
// } while(k<=3);

// let multipliedNumber = [];
// let arr = [2,4,6];
// for(let i = 0; i<arr.length; i++){
//   takeNumber =  arr [i]*2;
// multipliedNumber.push(takeNumber)
// }
// console.log(multipliedNumber);



// let teas = ["green tea", "black tea", "Lemon tea", "chai", "herbal tea"];
// let selectedTeas = [];
// for (let i = 0; i < teas.length; i++) {
//   // if(teas[i]!="chai"){

//   //     selectedTeas.push(teas[i]);
//   // }else{
//   //     continue;
//   // }
  
//   if (teas[i] === "chai") {
//     break;
//   }
//   selectedTeas.push(teas[i]);
// }
// // console.log(selectedTeas);


// let cities = ["London","New Work", "Paris" , "Berlin"];
// let visitedCities = [];
// for(let i =0; i<cities.length; i++){
//     if(cities[i]==="Paris"){
//         continue;
//     }
//     visitedCities.push(cities[i]);
// }
// // console.log(visitedCities);

// //for of loop ---------------------------
// let numbers = [1,2,3,4,5]
// let smallNumbers = []
// for(const num of numbers){
//   if(num===4){
//     break;
//   }
//   smallNumbers.push(num)
// }
// // console.log(smallNumbers);

// let tea = ["chai", "green teas", "Herbal teas", "black teas"];
// let preferredTeas = []
// for(const SelectedTeas of tea){
//   if(SelectedTeas ==="Herbal teas"){
//     continue;
//   }
//   preferredTeas.push(SelectedTeas);
// }
// // console.log(preferredTeas);

// //for in ------------------------

// // 

// let worldCities = {
//   Sydney: 500000,
// Tokyo: 9000000,
// Berlin: 350000,
// Paris: 2200000,
// }
// let largestCities = [];
// for (const city in worldCities) {
//  if (worldCities[city] < 3000000) {
//   continue;
//  }
//     largestCities[city] = worldCities[key]
//   }

 //for loop
 for (let i = 0; i <=10; i++) {
    const element =i;
   //  console.log(element);
 }   
   //  console.log(element); 


   for(let i = 2; i<=20; i++){
   // console.log(`table of  ${i}`);
   for(let j = 1; j<=10; j++){
      // console.log(`inner value of j ${j}, and outer vallue ${i}`);
      // console.log(`${i} * ${j} = ${i*j}`);
   }
   }

  
   let myArray = ['Ironman','Thor','Hulk'];
  for(let i = 0; i < myArray.length; i++){
   const element = myArray[i];
   // console.log(element);
  }


//Break and Continue
for (let index = 1; index<=10; index++) {
  if(index ===5){
    // console.log(`Detected 5`);
    continue;
  }
//  console.log(`value of index is ${index}`);
  };


//While Loop------------------

let index = 0;
while (index <=10) {
  // console.log(`Value of index is ${index}`);
  index =index+2;
}

// let arr = ['Ironman','Batman','Spiderman'];
// let i =0;
// while (i<arr.length) {
//    console.log(`${arr[i]}`);
//    i++;
// }


// do while loop-------------------------

let score =1;
do {
  // console.log(`Score is ${score}`);
  score++;
} while (score<=10);


//For of-----------------

const arrs = [1,2,3,4,5];
for(const num of arrs){
  // console.log(num);
}

const greeting = 'Hello-World'
for (const greet of greeting) {
  // console.log(`Each char is`,greet);
}

//Maps-------------
const map = new Map()
map.set('IN','India')
map.set('USA','United State of Amrica')
map.set('Fr','Franch')

// console.log(map);

for (const [key,value]of map) {
  console.log(value);
}
 
const myObj = {
'ps5':'GTA6',
'Pc':'GTA5',
'Mobile':'PUBG'
};
for (const [key,value] of myObj) {
  console.log(key);
}