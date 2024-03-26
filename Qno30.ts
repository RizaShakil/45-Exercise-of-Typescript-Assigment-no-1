//Creating arry
let usernames:string[] = ["Iqra","Anabia","Malaika","Admin","Jiya"];

//using foreach method
usernames.forEach(oneuser => {
    if (oneuser === "Admin"){
        console.log(`Hello ${oneuser} would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${oneuser} thank you for logging in again`)
    }
})
