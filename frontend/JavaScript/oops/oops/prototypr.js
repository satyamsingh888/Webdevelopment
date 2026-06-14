function createUser(username,score){
    this.username = username;
    this.score = score;
    
}

createUser.prototype.increment = function(){
    this.score++
 
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai",20)
const tea = createUser("tea",200)

chai.printMe();


//prototype-------------
let myHeros = ["thor","spiderman"]

let heroPower = {

    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    },
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
    
}
Array.prototype.heyHitesh = function(){
    console.log(`hitesh say heelo`);
}
// heroPower.hitesh();

// myHeros.hitesh();
// myHeros.heyHitesh();
// heroPower.heyHitesh();



//inheritance--------
const user = {
    name: "chai",
    email: "chai@google.com"
}
const teacher = {
    makeVideo: true
}

const teachingSuport = {
    isAvailable: false
}

const TASupport = {
makeAssignment: "JS Assignment",
fulltime: true,
__proto__: teachingSuport
}
teacher.__proto__=user


//mordern--------
Object.setPrototypeOf(teachingSuport,teacher)


let anotherUsername = "chaiAurCode    ";
let name = "satyam      ";
let name1 = 'chotaDon      ';
String.prototype.trueLength = function(){
    console.log(this);
   
    console.log(`True Length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
name.trueLength()
name1.trueLength()
