//arry as a parameter

function sandwich(...item:string[]){
     return ` I want sandwich of ${item}`
};

//calling a function

let firstcollection = sandwich("ham","cheeze","lettue");

let secondcollection = sandwich("Turkey","Swisa");

let thirdcollection = sandwich();

//print 

console.log(firstcollection);

console.log(secondcollection);

console.log(thirdcollection);
