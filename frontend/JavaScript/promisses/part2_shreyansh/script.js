//promises

//aap promises bansate ho jo ki do states me se ek state me ja sakta hai ya to resolve ya to reject. Agar promise resolve hota hai to uska result milta hai aur agar reject hota hai to error milta hai. hame dono ke liye code likhna parta hai 

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: 'chai', email: 'chai@123.com' });
  });
},1000);

promiseThree.then(function(user){
  console.log(user);
})


const num = new Promise(function(resole,reject){
setTimeout(function(){
    let rn =Math.floor(Math.random()*10);
 if(rn>5) resole(`resoleve with ${rn}`)
    else reject(`reject with ${rn}`)
},2000)
});

// num
// .then(function(val){
// console.log(val);
// }).catch(function(val){
// console.log(val);
// }).finally(function(){
//     console.log("thats sit");
// })


//async await 

async function abcd() {
    try{
        let val = await num;
        console.log(val);
    } catch(err){
        console.log(err);
    }
}

abcd();