const userEmail = []

if (userEmail){
    console.log('Got userEmail');    
} else {
    console.log("Don't have userEmail");    
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//true, "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log('array is empty');
// }

const empObj = {}
 if (Object.keys(empObj).length === 0){
    console.log('object is empty');
    
 }

 //Nullish Coalescing Operator(??) : null undefined

 let val1;
 //val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 50


 console.log(val1);


 //ternary operator
 //condition ? true : false

 const iceTeaPrice = 100
 iceTeaPrice >= 80 ? console.log("less than 50") : console.log("more than 80")

 