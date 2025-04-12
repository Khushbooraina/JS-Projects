//Immediately Invoked Function Expressions(IIFE): to remove the global scope pollution

(function chai(){

    //named iife
    console.log('databse connected');
    
})();
//chai()



//(function definition)(execution)

( (name) => {
    //unnamed iife
    console.log(`db connecte ${name}`);
} )('sam')


