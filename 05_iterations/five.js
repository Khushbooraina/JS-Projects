//for each

const coding = ['js', 'ruby', 'java', 'cpp']
// coding.forEach( function (item) {
//     console.log(item);
    
// } )


//arrow function
// coding.forEach( (item) => {
//     console.log(item);
    
// } )


//  function printMe(item){
//     console.log(item);
    
//  }

//  coding.forEach(printMe)



//it has item, index and arr as parameters
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);    
// } )



const mycoding =[
    {
        languageName: 'javascript',
        languageFileName : 'js'
    },
    {
        languageName: 'java',
        languageFileName : 'java'
    },
    {
        languageName: 'python',
        languageFileName : 'py'
    }
]


mycoding.forEach( (item) => {
    console.log(item.languageName);
    
})


