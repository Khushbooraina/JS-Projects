const user = {
    username : 'khushboo',
    price : 99,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`) //refer current context
        console.log(this); // gives object
        
    }

}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()


//console.log(this) // in node , its empty as there is no context

// function chai(){
//     let username = 'khushboo'
//     console.log(this.username) // if run in function
// }
// chai()

// const chai = function chai(){
//     let username = 'khushboo'
//     console.log(this.username) // if run in function
// }
// chai()


// this only works in object but give unidentified in function/arrow function



const chai = () => {
    let username = 'khushboo'
     console.log(this)
}
//chai()

//arow function
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log((addTwo(3,5)));
