//modify an arry
let magicianname :string [] = ["Soweba","Bushra","Aqsa","Maria"];
function showmagicians(greet :string ){
    for(let magician_name  of magicianname){
        console.log(greet,magician_name)
    }
};

//callin a function

showmagicians("Hello , What are you doing ");
