const pormiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //DB calls, cryptography , network
  setTimeout(() => {
    console.log('Async task is complete');
    resolve();
  }, 1000);
});

pormiseOne.then(function () {
  console.log('promise consumed');
});



//2nd promise----
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task 2');

    resolve();
  }, 1000);
}).then(function () {
  console.log('Async 2 resolved');
});

//3rd promise--------

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: 'chai', email: 'chai@123.com' });
  });
},1000);

promiseThree.then(function(user){
  console.log(user);
})


//4th pormise--------------

const promiseFour = new Promise(function(resolve,reject){
setTimeout(function(){
let error = false;
if(!error){
  resolve({username:"hitesh", password: "123"})
} else{
  reject('ERROR: Something wrong')
}
},2000)
})

promiseFour
.then((user)=>{
console.log(user);
return user.username;
})
.then((username)=>{
  console.log(username);
})
.catch(function(error){
  console.log(error);
}).finally(()=> console.log("promise either resolve or rejected"))



// 5th promise-------------
 const promiseFive =  new Promise(function(resolve,reject){
 setTimeout(function(){
let error = true;
if(!error){
  resolve({username:"javaScript", password: "123"})
} else{
  reject('ERROR: js wrong')
}
},1000)
})

async function consumePromiseFive(){
 try {
   const response = await promiseFive;
  console.log(response);
 } catch (error) {
  console.log(error);
 }
}
consumePromiseFive();



// async function getAllUsers() {
// try {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//  const data = await response.json();
//  console.log(data);
// } catch (error) {
//   console.log("ERROR",error);
// }
// }
// getAllUsers();



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log((error));
})