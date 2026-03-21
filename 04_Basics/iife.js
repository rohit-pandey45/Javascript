//Immediately Invoked Function Expression(IIFE)
//Function likhna aur turant hi execute krna

// function chai(){
//     console.log("DB Connected");
// }
// chai()

//IIFE --> (Function Definition)(Function Execution)
// (function chai(){            //NAMED IIFE
//     console.log("DB Connected");
// })();           //SemiColon important bcoz it tells JS to stop the execution of iife

//Using Arrow Function
// (() => {            //UNNAMED IIFE
//     console.log("DB")
// })();

((name) => {            //UNNAMED IIFE
    console.log(`DB Connected two ${name}`)
})("Rohit");
