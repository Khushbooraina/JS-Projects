//if
 const isUserLoggedIn = true
 const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
    
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("executed");


//<, >, >=, <=, ==(equal to), !=, ===(equals to and also checks type)

// const score = 200
// if ( score > 100 ){
//     const power = 'fly'
//     console.log(`User Power: ${power}`);
    
// }
// console.log(`User Power: ${power}`);


//shorthand notation
//const balance = 1000
//if ( balance > 500 ) console.log("test"); //implicit scope: will execute in one line : unreadable/immature

//nested
// if (balance < 500) {
//     console.log('less than 500');
// } else if (balance < 750){
//     console.log('less than 750');    
// } else if (balance < 900){
//     console.log('less than 900');    
// } else {
//     console.log('less than 1200');
    
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
//&& = all true
if (UserLoggedIn && debitCard  && 2!=2) {
    console.log('Allow to buy courses');
} 

//|| = true atleast one
if(loggedInFromGoogle || loggedInFromEmail){
    console.log('User Logged In');    
}


