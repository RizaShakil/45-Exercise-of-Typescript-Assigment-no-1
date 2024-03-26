//arry of current users 
let currentusers:string[] = ["Zahra","Salib","Faiz","NAfay","Rayan","Ruma"];
//ary of new users
let newusers:string[] = ["Anamta","Rubab","Salib","Zareen","Zahra","Ruma"];

//loop throught new users check for username avalability

newusers.forEach( new_users => {

    //making a condition for user name already exist in ourcondition variable

    let ourcondittion = currentusers.some(current_users => current_users.toLowerCase() === new_users.toLowerCase() )

    //printing differnt messages using if else statement

    if(ourcondittion){
        console.log(`Sorry ${new_users} is already taken`)
    }
    else{
        console.log(`This username ${new_users} is avalaible`)
    }
});

    

