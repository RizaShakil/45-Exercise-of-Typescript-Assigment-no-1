//making a function

function makeshirt(size:string = "large" , print :string = " I love TS"){
    console.log(`creating a ${size} shirt with the ${print} prints on shirt`)
}

//calling a function with by default method

makeshirt();

//calling a function now with mediam size shirt with by default 

makeshirt("Mediam");

//calling a function now with small size and different message

makeshirt("Small","I love programming");