//Define variable
let apple:string ="apple";
let uppercaseapple:string = "APPLE";
let ten:number = 10;
let twenty:number = 20;
let Weather:string[] = ["Summer","Winter","Spring"];

//test for equality and unequility with string
console.log("is apple is not equal to apple");
console.log(apple !="apple");

console.log('is apple is  equal to apple');
console.log(apple == "apple");

//test using LowerCase function
console.log("is APPLE is equal to apple after converting to lowercase");
console.log(uppercaseapple.toLowerCase() == "apple");

console.log("is apple is not equal to apple after converting lowercase");
console.log(uppercaseapple.toLowerCase() != "apple");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//equal to or not equal to
console.log("Is ten is equal to twenty");
console.log(ten == twenty);

console.log("Is ten is not equal to twenty");
console.log(ten != twenty);

//Greaterthan or Lessthan
console.log("Is ten is greater than zero");
console.log(ten > 0);

console.log("Is twenty is lessthan Ten");
console.log(twenty < ten);

//Greaterthan or equal to
console.log("Is ten is greaterthan or equal to 5");
console.log(ten >= 5);

//Lessthan or equal to
console.log("Is twenty is lessthan or equal  to 7");
console.log(twenty <= 7);

// Tests using "and" and "or" operators
//using and (&&)
console.log("twenty is not equal to ten and twenty is greaterthan ten");
console.log(twenty != ten && twenty > ten);

console.log("twenty is equal to ten and ten is lessthan twenty");
console.log(twenty == ten && ten < twenty);

//using or (||)
console.log("twenty is greatherthan 50 or  twenty is equal to twenty");
console.log(twenty > 50 || twenty == twenty);

console.log("ten is greaterthan 15 or twenty is equal to 8 ");
console.log(ten > 15 || twenty == 8);

// Test whether an item is in a array
//Include 
console.log("Is Summer includ in my weather arry");
console.log(Weather.includes("Summer"));

// Test whether an item is in a array
//Not Include
console.log("Is Winter is not include in my weather arry");
console.log(!Weather.includes("Winter"));











