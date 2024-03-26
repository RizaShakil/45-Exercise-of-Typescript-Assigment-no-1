

let magicianname2 :string [] = ["Soweba","Bushra","Aqsa","Maria"];


//making a copy of an arry
let magicians:string[] =[...magicianname2]

function showmagicians(greet :string){
    let withgreeting = "";

    for(let magiciann_name of magicianname2){
        withgreeting += `${greet} ${magiciann_name}\n`
    }
    return withgreeting;
};

let greetings = showmagicians("Hyy..");

let makearry = greetings.split("\n");

console.log(makearry);

//original arry
console.log(magicianname2);