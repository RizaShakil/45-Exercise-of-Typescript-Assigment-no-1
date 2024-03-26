//Creating arry
let usernames:string[] = ["ifra","Alina","Admin","Zermin","zahra"];

// Remove all of the usernames from your array, and make sure the correct message is printed
usernames = []

//using if statement for checking length of our arry its empty
if (usernames.length === 0){
    console.log("your arry is empty we need to find some users!")
}
else{
    //if arry is not empty use foreach method on arry
usernames.forEach(oneuser => {
    if (oneuser === "Admin"){
        console.log(`Hello ${oneuser} would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${oneuser} thank you for logging in again`)
    }
})
}
