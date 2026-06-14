//Es6---

class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPasword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai","chai@gmail.com","1234");
console.log(chai.encryptPasword());
console.log(chai.changeUserName());


//behind the screne----------

function User(username, email, password){
     this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPasword = function(){
       return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea","chai@gmail.com","1234");
console.log(tea.encryptPasword());
console.log(tea.changeUserName());