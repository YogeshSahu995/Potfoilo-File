// let anothername = "yogesh       ";
// const Name2 = "Deepanshu            ";
// String.prototype.trueLength = function(){
//     console.log(this)
//     console.log(`ture length is : ${this.trim().length}`)
// }
// anothername.trueLength();
// Name2.trueLength();



// call

// function user1(userName){
//     this.userName = userName;//add in global execution context...
//     function userThis (){
//         console.log(this) //global execution context
//         console.log(this.userName)
//     }
//     userThis();
// }
// user1('Jai Siya Ram')


// callstack problem ....
// function SetUsername(username){
    // Complex DB Calls
    // this.username = username;
// }

// function createUser(username,email,password){
    // SetUsername(username) ye function call hua to callstack pe jayega phir function niklega to uske ander ke variable gyab ho jyenge......
    
    // SetUsername.call(this, username)// it's hold the reference of function 
    // ab ye function execute ho bhi jayega to wo function hume apna variable de dega..
//     this.email = email;
//     this.password = password;
// }

// const chai = new createUser('chai', 'chai@cahi.com', 'chai123421')
// console.log(chai)
// createUser { email: 'chai@cahi.com', password: 'chai123421' }

// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         console.log(`${this.password}123`)
//     }
// }
// const user12 = new user('yogesh', '1413002', "abc");
// console.log(user12.encryptPassword())
// console.log(user12.fncEmail())

function createuser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    console.log(this)
}
const user4w = new createuser('bhadrqkj', 'bhardwaj@gmail.com', 1234);
console.log(createuser());


