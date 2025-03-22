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
console.log(loginUserMessage())
