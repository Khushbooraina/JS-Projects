//const tinderUser = new Object() //singleton object

const tinderUser = {}

tinderUser.id = '123qwe'
tinderUser.name = 'john'
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: 'khush@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'khushboo',
            lastname: 'raina'
        }
    }
}

//object nesting
//console.log(regularUser.fullname.userfullname.firstname);

//combine objects like arrays
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}


//Object.assign method(target, source)

//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2} // spraed operator
console.log(obj3);


const users = [
    {
        id: 1,
        email: 'test@gmail.com'
    },
    {
        id:2 ,
        email: 'test2@gmail.com'
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedOut'));