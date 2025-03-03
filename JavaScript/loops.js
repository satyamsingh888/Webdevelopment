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



let teas = ["green tea", "black tea", "Lemon tea", "chai", "herbal tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  // if(teas[i]!="chai"){

  //     selectedTeas.push(teas[i]);
  // }else{
  //     continue;
  // }
  
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
console.log(selectedTeas);


let cities = ["London","New Work", "Paris" , "Berlin"];
let visitedCities = [];
for(let i =0; i<cities.length; i++){
    if(cities[i]==="Paris"){
        continue;
    }
    visitedCities.push(cities[i]);
}
// console.log(visitedCities);

//for of loop



