function sayMyName(){
    console.log('A')
    console.log('B')
    console.log('C')
}
//sayMyName()

//add number
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }

function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2
    // return result    
    //console.log(result);  /// it won't work

    return num1+ num2
    
}

const result = addTwoNumbers(2, 8)
//console.log("Result:", result);


function loginUserMessage(username = 'Khush'){
    if(!username){
        console.log('PLease enter a username');
        return
    }
    return `${username} just logged in`
}
 
//console.log(loginUserMessage('Khushboo'));
//console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){ //rest operator
    return num1
}

//console.log(calculateCartPrice(200, 300, 400, 8000, 10000));


const user = {
    username: 'khushboo',
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
    
}

//handleObject(user)
handleObject({
    username : 'Sam',
    price: 399
})

const myNewArray = [200, 400, 600, 300]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 399]))