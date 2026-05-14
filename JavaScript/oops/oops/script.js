let username = "singh"
const user = {
    username: "john_doe",
    email: "HsBZP@example.com",
    login: function() {
       
       abc = ()=>{
      
         xyz = ()=>{
              console.log(`${this.username} has logged in.`);
         }
         xyz();
       }
       abc();
}}
user.login();



function user1(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
this.greeting = function(){
console.log(`welcome ${this.username}`);
} 


    return this;
}

const userOne = new user1("satyam",12,true);
const userTwo = new user1("king",12,false);
console.log(userOne);
console.log(userTwo);