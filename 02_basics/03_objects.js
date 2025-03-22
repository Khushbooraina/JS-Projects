//singleton
//object literals
// singelton: Object.create

const mySym = Symbol('key1')



const JsUser = {
    name: 'Khushboo',
    'fullname': 'Khushboo Raina',
    [mySym]: 'mykey1',
    age: 34,
    loation: 'Jammu',
    email: 'khushboo@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser['fullname']);
// console.log(JsUser[mySym]);


JsUser.email = 'test@gmail.com' //overwrite or change value
//Object.freeze(JsUser)  //freeze object
JsUser.email = 'khush@gmail.com'
//console.log(JsUser);

//function in object
JsUser.greeting = function(){
    console.log('Hello js user')
}

JsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());





